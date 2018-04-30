import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { GameModule } from './game/game.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
// provider used to create fake backend
import { JwtInterceptor } from './jwt.interceptor';
import { fakeBackendProvider } from './fake-backend-interceptor.service';
import { AlertService } from './services/alert.service';
import { UserModule } from './user/user.module';



@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        AuthModule,
        GameModule,
        HttpClientModule,
        AppRoutingModule,
        UserModule
    ],
    providers: [
        // provider used to create fake backend
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        fakeBackendProvider,
        AlertService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
