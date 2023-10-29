import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
    user: User;
    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private AuthService: AuthService
    ) {}

    ngOnInit() {
        let userDetails = localStorage.getItem('UserDetails');
        if (userDetails) {
            let tempUser = JSON.parse(userDetails);
            this.user = new User(
                tempUser.userId,
                tempUser.username,
                null,
                tempUser.email
            );
        } else {
            this.logout();
        }
    }

    logout() {
        this.AuthService.logout();
    }
}
