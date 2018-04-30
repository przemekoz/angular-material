import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/user';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    currentUser: User;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.currentUser = this.authService.getCurrentUser();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
