import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginFormModule} from "./presenter/login-form/login-form.module";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginFormModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
