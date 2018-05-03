import { Component, AfterViewChecked, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './user/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked, OnInit {
    currentUser: User;

    constructor(
        private authService: AuthService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.currentUser = {
            firstName: '',
            lastName: '',
            id: 0,
            username: '',
            password: ''
        };
    }

    ngAfterViewChecked() {
        this.currentUser = this.authService.getCurrentUser() || {
            firstName: '',
            lastName: '',
            id: 0,
            username: '',
            password: ''
        };
        this.changeDetectorRef.detectChanges();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
