import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-check-box',
  imports: [TranslatePipe, ReactiveFormsModule],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.css',
})
export class CheckBoxComponent {
  @Input() control!: any;
  @Input() labelInput!: any;
}
