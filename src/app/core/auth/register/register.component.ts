import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { InputComponent } from "../../../shared/components/input/input.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, RouterModule, InputComponent, TranslatePipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private readonly authService= inject(AuthService);
  private readonly router= inject(Router);
  private readonly  fb= inject(FormBuilder);


//Signals syntax
msgError:WritableSignal<string> = signal('');
isLoading:WritableSignal<boolean> = signal(false);
subscription:WritableSignal<Subscription> = signal(new Subscription());
flag:WritableSignal<boolean> = signal(true);
registerFrom:WritableSignal<FormGroup> = signal(this.fb.group({
    name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    rePassword: [null, [Validators.required]],
    phone: [null, [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]]
  }, {validators: this.confirmPassword}));

//Zone.js syntax
  // msgError:string = '';
  // isLoading:boolean = false;
  // subscription: Subscription = new Subscription();
  // flag:boolean = true;

  // registerFrom: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  //   rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  //   phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0-9]{9}$/)])
  // }, {validators: this.confirmPassword})

  //Easy syntax
  // registerFrom!: FormGroup;

  // ngOnInit(): void {
  //   this.fromInit();
  // }
  // fromInit(): void{
  //  this.registerFrom.set(this.fb.group({
  //   name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
  //   email: [null, [Validators.required, Validators.email]],
  //   password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  //   rePassword: [null, [Validators.required]],
  //   phone: [null, [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]]
  // }, {validators: this.confirmPassword}))
  // }
  submitForm(): void {
    if(this.registerFrom().valid){

      this.subscription().unsubscribe();
    
      this.isLoading.set(true);

  this.subscription.set(this.authService.registerForm(this.registerFrom().value).subscribe({
        next: (res)=>{
          if(res.message === 'success'){
            //Navigate to login
            // console.log(res);
            this.isLoading.set(false);
            
            this.msgError.set('');
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          }
        },
        error:(err)=>{
          // console.log(err.error.message);
          this.msgError.set(err.error.message);
          this.isLoading.set(false);

        }
      }))
    }else{
      // this.registerFrom.setErrors({mismatch:true});
      this.registerFrom().get('rePassword')?.patchValue('');
      this.registerFrom().markAllAsTouched();
    }
  }

  confirmPassword(group: AbstractControl) {
    if(group.get('password')?.value === group.get('rePassword')?.value){
      return null;
    }else{
      group.get('rePassword')?.setErrors({mismatch: true})
      return {mismatch: true}
    }

  }
  
}
