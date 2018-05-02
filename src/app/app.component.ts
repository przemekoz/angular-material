import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
    title = 'app';

    constructor(
        private authService: AuthService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngAfterViewChecked() {
        this.changeDetectorRef.detectChanges();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
