
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';


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
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
