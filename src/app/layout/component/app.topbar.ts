import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '../../core/auth/auth.service';
import { UserInfo } from '../../core/auth/auth.model';
import { AvatarComponent } from '../../shared/ui/avatar/avatar.component';
import { UserInfoComponent } from '../../shared/components/user-info/user-info.component';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, MatMenuModule, AvatarComponent, UserInfoComponent],
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="layout-topbar-logo" routerLink="/">
                    <img src="assets/brand/favicon.png" alt="mayo specialty app dashboard" class="pr-1" style="height:1.5em; width:auto;" />

                    <span>Mark L Dashboard</span>
                </a>
            </div>

            <div class="layout-topbar-actions">
                <div class="layout-topbar-menu hidden lg:block">
                    <div class="layout-topbar-menu-content">
                        @if (userInfo) {
                            <button
                                type="button"
                                class="inline-flex cursor-pointer rounded-full border-0 bg-transparent p-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                [matMenuTriggerFor]="profileMenu"
                                aria-label="User menu"
                            >
                                <app-avatar [image]="userPhoto" [label]="userInfo.fullName" />
                            </button>

                            <mat-menu #profileMenu="matMenu" class="profile-popover app-popup-menu">
                                <div class="p-2" (click)="$event.stopPropagation()">
                                    <app-user-card [user]="userInfo" [photo]="userPhoto" (logout)="logout()"></app-user-card>
                                </div>
                            </mat-menu>
                        } @else {
                            <button type="button" class="layout-topbar-action">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppTopbar implements OnInit {
    @Input()
    userPhoto: any = null;

    @Input()
    userInfo: UserInfo | undefined = undefined;

    constructor(
        public layoutService: LayoutService,
        private auth: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        if (this.auth.isLoggedIn()) {
            this.auth.getUserProfile().then((user) => {
                this.userInfo = user;
            });

            this.auth.getUserPhoto().then((photo) => {
                this.userPhoto = photo;
            });
        }
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
