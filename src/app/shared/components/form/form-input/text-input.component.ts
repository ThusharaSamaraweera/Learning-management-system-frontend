import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() inputType: string = 'text';
  @Input() placeholder: string  = 'hi';
  @Input() customClasses!: string;
  @Input() control!: UntypedFormControl;
  @Input() isServerSideSearch: boolean = false;
  @Input() isNumeric: boolean = false;
  @Input() isAvoidSpaceKey: boolean = false;
  @Input() inUppercase: boolean = false;

  @Output() inputValue = new EventEmitter();
  @Output() addonClick = new EventEmitter();
  @Output() blurEvent = new EventEmitter();
  @ViewChild('defaultInput') defaultInput!: ElementRef;

  txtValue!: string;

  onKeyDownHandler = (e: any) => {
    if (this.isNumeric) {
      if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.keyCode != 8) {
        e.preventDefault();
      }
    }

    if (this.isAvoidSpaceKey) {
      if (e.which === 32) {
        e.preventDefault();
      }
      // NOTE : THIS BELOW FIX IS FOR MOBILE
      const value = e.target.value;
      this.control.setValue(value?.split(' ').join(''));
    }
  };
  
  onKeyUpEvent(event: any) {
    this.txtValue = event.target.value;
    this.inputValue.emit(this.txtValue);
  }

  onBlur($event: any) {
    this.blurEvent.emit($event);
  }

  onInputValueModelChange() {
    if (this.inUppercase)
      this.defaultInput.nativeElement.value =
        this.defaultInput.nativeElement.value.toUpperCase();
  }
}
