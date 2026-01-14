import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../shared/components/input/input.component";
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { log } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule, InputComponent, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);

  verifyEmail!: FormGroup;
  verifyCode!: FormGroup;
  resetPassword!: FormGroup;

  step: number = 1;
  ngOnInit(): void {
    this.initForm();


    if (isPlatformBrowser(this.pLATFORM_ID)) {
      const savedEmail = localStorage.getItem('rememberEmail');


      if (savedEmail) {
        this.resetPassword.patchValue({
          email: savedEmail,
          rememberMe: true
        });
      }
    }
  }

  initForm(): void {
    this.verifyEmail = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    })

    this.verifyCode = this.fb.group({
      resetCode: [null, [Validators.required]]
    })

    this.resetPassword = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      newPassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]]
    })
  }

  formStep1(): void {
    if (this.verifyEmail.valid) {
      this.authService.submitVerifyEmail(this.verifyEmail.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 2;
        }
      })
    }
  }
  formStep2(): void {
    this.step = 3;
  }
  formStep3(): void {
    if (this.verifyCode.valid) {
      this.authService.submitVerifyCode(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res);
          this.step = 4;
        }
      })
    }
  }
  formStep4(): void {
    if (this.resetPassword.valid) {
      this.authService.submitResetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          console.log(res);
          //Navigate to home page
          this.cookieService.set('token', res.token);
          this.router.navigate(['/home']);
        }
      })

      //Remember me 
      const { email, rememberMe } = this.resetPassword.value;

      if (rememberMe) {
        //Because SSR don't know (localstorage)
        if (isPlatformBrowser(this.pLATFORM_ID)) {
          localStorage.setItem('rememberEmail', email);
        }
      } else {
        if (isPlatformBrowser(this.pLATFORM_ID)) {
          localStorage.removeItem('rememberEmail');
        }
      }

    }
  }
}
