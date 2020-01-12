import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppConstants } from '../constants/app.constants';

@Component({
  selector: 'app-signup-root',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
  title = 'ogitasks';
  isSendCode = false;
  signForm = this.fb.group({
    code: this.fb.control('', []),
    email: this.fb.control('', [Validators.required, Validators.email]),
  });

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private userService: UserService) {

  }


  ngOnInit() {

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onEmailChange() {
    console.log('change text');
    this.isSendCode = false;
  }

  onSubmit() {
    this.validateAllFormFields(this.signForm);
    if (this.signForm.valid) {
      if (this.isSendCode) {
        if (this.signForm.value.code.length > 0) {
          const object = {
            username: this.signForm.value.email,
            password: this.signForm.value.code,
            grantType: AppConstants.PASSWORD,
          };
          this.userService.login(object).subscribe(
            (data: any) => {
              // localStorage.setItem('role', data.role[0]);
              localStorage.setItem('token', JSON.stringify(data));
              this.router.navigate(['/dashboard']);
            },
            error => {
              alert(error.error.error_description);
            },
          );
        }
      } else {
        this.userService.sendCode({ map: { email: this.signForm.value.email, allowSignUp: 'true' } }).subscribe(
          (data: any) => {
            this.isSendCode = true;
          },
          error => {
            alert(error.error.message);
          },
        );
      }
    }
  }
}
