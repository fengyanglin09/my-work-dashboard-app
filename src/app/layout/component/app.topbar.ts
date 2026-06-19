import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '../../core/auth/auth.service';
import { Avatar } from 'primeng/avatar';
import { UserInfo } from '../../core/auth/auth.model';
import { Popover } from 'primeng/popover';
import { UserInfoComponent } from '../../shared/components/user-info/user-info.component';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, Avatar, Popover, UserInfoComponent],
    styles: `

        /* Remove arrow */
        :host ::ng-deep .profile-popover:after,
        :host ::ng-deep .profile-popover:before {
            display: none !important;
        }

    `,
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                    <i class="pi pi-bars"></i>
                </button>
                <a class="layout-topbar-logo" routerLink="/">
                    <img src="assets/brand/favicon.png" alt="mayo specialty app dashboard" class="pr-1" style="height:1.5em; width:auto;" />

                    <span>Mark L Dashboard</span>
                </a>
            </div>

            <div class="layout-topbar-actions">
                <div class="layout-topbar-menu hidden lg:block">
                    <div class="layout-topbar-menu-content">
                        <!--                    <button type="button" class="layout-topbar-action">-->
                        <!--                        <i class="pi pi-calendar"></i>-->
                        <!--                        <span>Calendar</span>-->
                        <!--                    </button>-->
                        <!--                    <button type="button" class="layout-topbar-action">-->
                        <!--                        <i class="pi pi-inbox"></i>-->
                        <!--                        <span>Messages</span>-->
                        <!--                    </button>-->

                        @if (userInfo) {
                            <button
                                #profile
                                type="button"
                                class="cursor-pointer bg-transparent border-0 p-0"
                                (click)="op.toggle($event)"
                                aria-label="User menu"
                            >
                                <p-avatar
                                    [image]="userPhoto"
                                    [label]="userPhoto ? undefined : userInitials"
                                    shape="circle"
                                    styleClass="ring-2 ring-offset-2 ring-primary"
                                ></p-avatar>
                            </button>

                            <p-popover
                                #op
                                styleClass="profile-popover"
                                [appendTo]="profile"
                            >
                                <app-user-card [user]="userInfo" [photo]="userPhoto" (logout)="logout()"></app-user-card>
                            </p-popover>

                        } @else {
                            <button type="button" class="layout-topbar-action">
                                <i class="pi pi-user"></i>
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
    items!: MenuItem[];

    @Input()
    userPhoto: any = null;

    @Input()
    userInfo: UserInfo | undefined = undefined;

    userInitials = '';

    constructor(
        public layoutService: LayoutService,
        private auth: AuthService,
        private router: Router
    ) {}
    ngOnInit(): void {
        if (this.auth.isLoggedIn()) {
            this.auth.getUserProfile().then((user) => {
                this.userInfo = user;
                this.userInitials = this.getInitials(user.fullName);
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

    private getInitials(name: string): string {
        return name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join('')
            .toUpperCase();
    }
}
