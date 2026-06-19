export interface UserInfo {
    fullName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    jobTitle?: string;
    roles: string[];
}

export interface GoogleCredentialResponse {
    credential: string;
    select_by?: string;
}

export interface GoogleIdTokenPayload {
    aud: string;
    email: string;
    email_verified?: boolean;
    exp: number;
    family_name?: string;
    given_name?: string;
    hd?: string;
    name: string;
    picture?: string;
    sub: string;
}
