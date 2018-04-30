import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../user/user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    hide = true;
    loading = false;
    model: User = {
        id: 0,
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    submit() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful');
                    this.authService.login(this.model.username, this.model.password).subscribe(
                        loginData => {
                            this.router.navigate(['/']);
                        },
                        error => {
                            this.alertService.error(error);
                            this.loading = false;
                        });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
