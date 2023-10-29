import { Component } from '@angular/core';
import { Password } from 'src/models/password.model';
import { User } from 'src/models/user.model';
import { MainService } from './main.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    user: any = null;
    passwords: any;

    // passwords: Password[] = [
    //     new Password(
    //         1,
    //         'Abc@123',
    //         'Netflix',
    //         null,
    //         'Netflix Password',
    //         'Sunny'
    //     ),
    //     new Password(
    //         2,
    //         'Xyz@123',
    //         'Prime',
    //         'https://www.primevideo.com/',
    //         'Amazon Prime Password',
    //         'Sunny'
    //     ),
    //     new Password(
    //         3,
    //         'Pqr@123',
    //         'Hotstar',
    //         'https://hotstar.com/in/',
    //         'Hotstar Password',
    //         'Sunny'
    //     ),
    // ];

    constructor(
        private MainService: MainService,
        private AuthService: AuthService
    ) {}

    ngOnInit() {
        let userDetails = localStorage.getItem('UserDetails');
        if (userDetails) {
            this.user = JSON.parse(userDetails);
            this.GetPasswords();
        } else {
            this.AuthService.logout();
        }
    }

    GetPasswords() {
        var sendObj = {
            UserId: this.user.userId,
            LoginPassword: this.user.LoginPassword,
        };
        this.MainService.GetPasswords(sendObj).subscribe({
            next: (resp) => {
                console.log('Response');
                console.log(resp);
                if (resp) {
                    this.passwords = resp;
                }
            },
            error: (err) => {
                console.log('Error');
                console.log(err);
            },
        });
    }
}
