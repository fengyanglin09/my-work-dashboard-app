import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInfo } from '../../../core/auth/auth.model';
import { Avatar } from 'primeng/avatar';
import { Divider } from 'primeng/divider';
import { Tag } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-user-card',
    imports: [Avatar, Divider, Tag, ButtonModule],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
    @Input() user?: UserInfo;
    @Input() photo?: string | undefined; // base64 photo optional

    @Output() logout = new EventEmitter<void>();
}
