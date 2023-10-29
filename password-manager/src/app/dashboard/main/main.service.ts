import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MainService {
    environment: any = environment;
    constructor(private http: HttpClient) {}

    GetPasswords(data: any) {
        return this.http.post(
            environment.hostAPI + 'api/Password/GetPasswords/',
            data
        );
    }
}
