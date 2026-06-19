import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GoogleCredentialResponse, GoogleIdTokenPayload, UserInfo } from './auth.model';

declare global {
    interface Window {
        google?: {
            accounts: {
                id: {
                    initialize: (config: GoogleIdentityInitializeConfig) => void;
                    renderButton: (parent: HTMLElement, options: GoogleIdentityButtonConfig) => void;
                    prompt: () => void;
                    disableAutoSelect: () => void;
                };
            };
        };
    }
}

interface GoogleIdentityInitializeConfig {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
    auto_select?: boolean;
    cancel_on_tap_outside?: boolean;
}

interface GoogleIdentityButtonConfig {
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    logo_alignment?: 'left' | 'center';
    width?: string | number;
}

const credentialStorageKey = 'mqml-dashboard.googleCredential';
const userStorageKey = 'mqml-dashboard.googleUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private credential: string | null = localStorage.getItem(credentialStorageKey);
    private profile: GoogleIdTokenPayload | null = this.readStoredProfile();

    isLoggedIn(): boolean {
        return !!this.profile && !this.isExpired(this.profile);
    }

    async initializeGoogleButton(parent: HTMLElement, onSuccess: () => void): Promise<void> {
        await this.waitForGoogleIdentity();

        window.google!.accounts.id.initialize({
            client_id: environment.googleClientId,
            callback: (response) => {
                this.handleCredentialResponse(response);
                onSuccess();
            },
            auto_select: false,
            cancel_on_tap_outside: true
        });

        parent.innerHTML = '';
        window.google!.accounts.id.renderButton(parent, {
            theme: 'outline',
            size: 'large',
            text: 'signin_with',
            shape: 'rectangular',
            logo_alignment: 'left',
            width: 280
        });
    }

    logout(): void {
        this.credential = null;
        this.profile = null;
        localStorage.removeItem(credentialStorageKey);
        localStorage.removeItem(userStorageKey);
        window.google?.accounts.id.disableAutoSelect();
    }

    getIdToken(): string | null {
        return this.credential;
    }

    getUserRoles(): string[] {
        return ['Google User'];
    }

    async getUserInfo(): Promise<UserInfo | null> {
        return this.getUserProfile();
    }

    async getAccessToken(): Promise<string | null> {
        return null;
    }

    async getUserProfile(): Promise<UserInfo> {
        if (!this.profile) {
            throw new Error('No Google profile is available.');
        }

        return {
            fullName: this.profile.name,
            firstName: this.profile.given_name,
            lastName: this.profile.family_name,
            email: this.profile.email,
            jobTitle: 'Google account',
            roles: this.getUserRoles()
        };
    }

    async getUserPhoto(): Promise<string | null> {
        return this.profile?.picture ?? null;
    }

    private handleCredentialResponse(response: GoogleCredentialResponse): void {
        const profile = this.decodeCredential(response.credential);

        this.credential = response.credential;
        this.profile = profile;

        localStorage.setItem(credentialStorageKey, response.credential);
        localStorage.setItem(userStorageKey, JSON.stringify(profile));
    }

    private decodeCredential(credential: string): GoogleIdTokenPayload {
        const payload = credential.split('.')[1];
        const normalizedPayload = this.padBase64(payload.replace(/-/g, '+').replace(/_/g, '/'));
        const decodedPayload = decodeURIComponent(
            atob(normalizedPayload)
                .split('')
                .map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`)
                .join('')
        );

        const profile = JSON.parse(decodedPayload) as GoogleIdTokenPayload;
        if (profile.aud !== environment.googleClientId) {
            throw new Error('Google credential audience does not match this app.');
        }

        return profile;
    }

    private readStoredProfile(): GoogleIdTokenPayload | null {
        const rawProfile = localStorage.getItem(userStorageKey);
        if (!rawProfile) {
            return null;
        }

        try {
            const profile = JSON.parse(rawProfile) as GoogleIdTokenPayload;
            return this.isExpired(profile) || profile.aud !== environment.googleClientId ? null : profile;
        } catch {
            return null;
        }
    }

    private isExpired(profile: GoogleIdTokenPayload): boolean {
        return profile.exp * 1000 <= Date.now();
    }

    private padBase64(value: string): string {
        const padding = value.length % 4;
        return padding === 0 ? value : `${value}${'='.repeat(4 - padding)}`;
    }

    private waitForGoogleIdentity(): Promise<void> {
        return new Promise((resolve, reject) => {
            const startedAt = Date.now();
            const timer = window.setInterval(() => {
                if (window.google?.accounts?.id) {
                    window.clearInterval(timer);
                    resolve();
                    return;
                }

                if (Date.now() - startedAt > 5000) {
                    window.clearInterval(timer);
                    reject(new Error('Google Identity Services did not load.'));
                }
            }, 50);
        });
    }
}
