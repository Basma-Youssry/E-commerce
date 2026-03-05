import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { InputComponent } from "../../shared/components/input/input.component";
import { TranslatePipe } from '@ngx-translate/core';
import { CheckBoxComponent } from "../../shared/components/check-box/check-box.component";

@Component({
  selector: 'app-contact-us',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, InputComponent, TranslatePipe, CheckBoxComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  private readonly  fb = inject(FormBuilder);

  contactForm:WritableSignal<FormGroup> = signal(this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [null, [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
    topic: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    terms: [false, Validators.required]
    },  {validators: this.confirmPassword}));


    submit() {
    if (this.contactForm().valid) {
      console.log(this.contactForm().value);
      this.contactForm().reset();
    } else {
      this.contactForm().markAllAsTouched();
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
