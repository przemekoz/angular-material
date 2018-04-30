import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../user/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    loading = false;
    returnUrl: string;
    model: User = {
        id: 0,
        firstName: '',
        lastName: '',
        username: null,
        password: null
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    submit() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
