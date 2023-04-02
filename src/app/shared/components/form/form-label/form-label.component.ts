import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  templateUrl: './form-label.component.html',
})
export class FormLabelComponent {
  @Input() labelText!: string;
  @Input() isRequired: boolean = false;
  @Input() labelClass!: string;
}
