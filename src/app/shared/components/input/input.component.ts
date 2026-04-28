import { Component, Input, input } from '@angular/core';
import { ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control!: any;
  @Input() typeInput!: string;
  @Input() idInput!: string;
  @Input() labelInput!: string;
  @Input() element:string = 'input';
  @Input() placeholder:string = "";
  @Input() readonly = false;
  flag:boolean = true;
}
