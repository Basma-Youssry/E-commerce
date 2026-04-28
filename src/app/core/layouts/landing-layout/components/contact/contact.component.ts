import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../../../../shared/components/input/input.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, InputComponent, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  private readonly fb = inject(FormBuilder);

  contactForm: WritableSignal<FormGroup> = signal(this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
  }));


  submit() {
    if (this.contactForm().valid) {
      // console.log(this.contactForm().value);
      this.contactForm().reset();
    } else {
      this.contactForm().markAllAsTouched();
    }
  }
}
