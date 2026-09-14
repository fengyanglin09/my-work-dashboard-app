import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UserInfo } from '../../../core/auth/auth.model';
import { AvatarComponent } from '../../ui/avatar/avatar.component';
import { TagComponent } from '../../ui/tag/tag.component';

@Component({
    selector: 'app-user-card',
    imports: [AvatarComponent, MatDividerModule, TagComponent, MatButtonModule],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
    @Input() user?: UserInfo;
    @Input() photo?: string | undefined; // base64 photo optional

    @Output() logout = new EventEmitter<void>();
}
