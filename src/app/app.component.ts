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
    private defaultUser = {
        firstName: '',
        lastName: '',
        id: 0,
        username: '',
        password: ''
    };

    constructor(
        private authService: AuthService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.currentUser = this.defaultUser;
    }

    ngAfterViewChecked() {
        this.currentUser = this.authService.getCurrentUser() || this.defaultUser;
        this.changeDetectorRef.detectChanges();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
