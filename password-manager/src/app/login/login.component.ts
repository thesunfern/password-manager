import { Component } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    form: FormGroup;
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }
    onLogin() {
        let email = this.form.get('email').value;
        let password = this.form.get('password').value;

        if (email == 'sunny@gmail.com' && password == 'sunny123') {
            this.router.navigate(['/dashboard']);
            // alert('Logged In');
        } else {
            alert('Invalid Credentials!');
        }
    }
}
