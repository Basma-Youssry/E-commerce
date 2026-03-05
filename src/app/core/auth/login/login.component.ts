import { Component, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router, RouterModule } from '@angular/router';
import { InputComponent } from "../../../shared/components/input/input.component";
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { TranslatePipe } from '@ngx-translate/core';
import { CheckBoxComponent } from "../../../shared/components/check-box/check-box.component";


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, InputComponent, TranslatePipe, CheckBoxComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  private readonly cookieService=  inject(CookieService);
//Signals syntax
msgError:WritableSignal<string> = signal('');
isLoading:WritableSignal<boolean> = signal(false);
subValue:WritableSignal<Subscription> = signal(new Subscription());
showPassword:WritableSignal<boolean> = signal(false);
loginFrom:WritableSignal<FormGroup> = signal(this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rememberMe: true
    }));
//Zone.js syntax
  // msgError: string = '';
  // isLoading: boolean = false;
  // subValue!: Subscription;
  // showPassword = false;
  // loginFrom!: FormGroup;

  ngOnInit() {

    // this.formInit();

    if (isPlatformBrowser(this.pLATFORM_ID)) {
      const savedEmail = localStorage.getItem('rememberEmail');


      if (savedEmail) {
        this.loginFrom().patchValue({
          email: savedEmail,
          rememberMe: true
        });
      }
    }



  }
  // loginFrom: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  // })


  // formInit(): void {
  //   this.loginFrom = this.fb.group({
  //     email: [null, [Validators.required, Validators.email]],
  //     password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  //     rememberMe: true
  //   })
  // }
  submitForm(): void {
    if (this.loginFrom().valid) {

      if (this.subValue()) {
        this.subValue().unsubscribe();
      }
      this.isLoading.set(true);

      //Remember me 
      const { email, rememberMe } = this.loginFrom().value;

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


      this.subValue.set(this.authService.loginForm(this.loginFrom().value).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            //Navigate to login
            // console.log(res);

            this.msgError.set('');
            this.isLoading.set(false);

            //For saving Token inside cookie storage
            this.cookieService.set('token', res.token);

          //  console.log(this.authService.decodeToken());
            
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 1000);
          }

        },
        error: (err) => {
          // console.log(err.error.message);
          this.msgError.set(err.error.message);
          this.isLoading.set(false);
        }
      }))
    }
  }
}
