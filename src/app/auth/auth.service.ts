import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
        if (typeof (Storage) === undefined) {
            // @TODO log user dont have Storage
        }
    }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        sessionStorage.removeItem('currentUser');
    }

    isAuthenticated(): boolean {
        return sessionStorage.getItem('currentUser') !== null;
    }
}
