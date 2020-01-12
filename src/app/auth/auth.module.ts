
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { SharedModule } from '../common/common.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
