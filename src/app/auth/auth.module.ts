import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent, LogoutComponent, RegisterComponent],
  providers: [AuthGuard, AuthService]
})
export class AuthModule { }
