import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user.model';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private httpClient: HttpClient) {}

    AuthenticateUser(data: any) {
        return this.httpClient.post(
            'http://localhost:5192/api/User/AuthenticateUser',
            data
        );
    }
}
