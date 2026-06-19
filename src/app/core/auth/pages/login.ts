import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, RouterModule, RippleModule],
    template: `
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">

                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Mark L Dashboard</div>
                            <span class="text-muted-color font-medium">Sign in with Google to continue</span>
                        </div>

                        <div class="flex flex-col items-center gap-4">
                            <div #googleButton class="min-h-11"></div>

                            @if (errorMessage) {
                                <div class="text-red-500 text-sm text-center max-w-80">
                                    {{ errorMessage }}
                                </div>
                            }

                            <div class="text-muted-color text-sm text-center max-w-80">
                                Access is checked in the browser with Google Identity Services.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login implements AfterViewInit {
    @ViewChild('googleButton') googleButton!: ElementRef<HTMLElement>;

    errorMessage = '';

    constructor(
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngAfterViewInit(): void {
        this.auth
            .initializeGoogleButton(this.googleButton.nativeElement, () => {
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/';
                this.router.navigateByUrl(returnUrl);
            })
            .catch(() => {
                this.errorMessage = 'Google sign-in could not load. Check your connection and refresh the page.';
            });
    }
}
