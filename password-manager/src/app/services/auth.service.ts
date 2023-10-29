import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) {}

    isUserLoggedIn() {
        let userDetails = localStorage.getItem('UserDetails');
        if (userDetails) {
            return true;
        } else {
            return false;
        }
    }
    logout() {
        localStorage.removeItem('UserDetails');
        this.router.navigate(['/']);
    }
}
