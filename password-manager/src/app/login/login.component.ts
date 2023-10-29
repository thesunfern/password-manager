import { Component } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from 'src/models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    form: FormGroup;
    router: Router;
    user: User;

    constructor(router: Router, private LoginService: LoginService) {
        this.router = router;
    }

    ngOnInit() {
        this.form = new FormGroup({
            userId: new FormControl('', [Validators.required]),
            // email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }
    onLogin() {
        let userId = this.form.get('userId').value;
        // let email = this.form.get('email').value;
        let password = this.form.get('password').value;

        let sendObj = {
            UserId: userId,
            LoginPassword: password,
        };

        this.LoginService.AuthenticateUser(sendObj).subscribe({
            next: (resp) => {
                if (resp.hasOwnProperty('userId')) {
                    localStorage.setItem('UserDetails', JSON.stringify(resp));
                    this.router.navigate(['/dashboard']);
                } else {
                    alert('Inavlid Credentials!');
                }
            },
            error: (err) => {
                alert('Inavlid Credentials!');
                console.log('Error');
                console.log(err);
            },
        });

        // if (email == 'sunny@gmail.com' && password == 'sunny123') {
        //     this.router.navigate(['/dashboard']);
        //     // alert('Logged In');
        // } else {
        //     alert('Invalid Credentials!');
        // }
    }
}
