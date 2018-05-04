import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { User } from '../user/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

const empty: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    password: ''
};
const user: User = {
    id: 1,
    firstName: 'TestUserFirstname',
    lastName: 'TestUserLastname',
    username: 'TestUserUsername',
    password: 'TestUserPassword'
};

describe('AuthService', () => {
    let httpClientSpy: { post: jasmine.Spy };
    let service: AuthService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        service = new AuthService(<any>httpClientSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should clear current user after logout', () => {
        service.logout();
        expect(service.isAuthenticated()).toBeFalsy();
    });

    it('should get empty object User if logout', () => {
        service.logout();
        expect(service.getCurrentUser()).toEqual(empty);
    });

    it('should get logged user data if login', () => {
        service.logout();
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        expect(service.getCurrentUser()).toEqual(user);
    });

    it('should get isAuthenticated() if login', () => {
        service.logout();
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        expect(service.isAuthenticated()).toBeTruthy();
    });

    it('should get error - wrong usernmae and password (HttpClient called once)', () => {
        service.logout();
        httpClientSpy.post.and.returnValue(Observable.throw('Username or password is incorrect'));

        service.login('badUsername!@#$%)(*&', 'badPassword!@#$%)(*&').subscribe(
            data => {
                expect(data).toBeNull();
            },
            error => {
                expect(error).toBe('Username or password is incorrect');
            });
        expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });

});
