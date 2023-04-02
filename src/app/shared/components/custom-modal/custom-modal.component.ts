import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import {
  NgCustomModalContentTemplateDirective,
  NgCustomModalFooterTemplateDirective,
  NgCustomModalHeaderTemplateDirective,
} from '../../directive/custom-modal-template.directive';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
})
export class CustomModalComponent {
  @Input() visibility!: boolean;
  @Input() width!: string;
  @Input() headerLbl!: string;
  @Output() modalVisibility = new EventEmitter();

  // custom templates
  @ContentChild(NgCustomModalHeaderTemplateDirective, { read: TemplateRef })
  modalHeaderTemplate: TemplateRef<any> | undefined;
  @ContentChild(NgCustomModalContentTemplateDirective, { read: TemplateRef })
  modalContentTemplate: TemplateRef<any> | undefined;
  @ContentChild(NgCustomModalFooterTemplateDirective, { read: TemplateRef })
  modalFooterTemplate: TemplateRef<any> | undefined;

  toggleModal() {
    this.visibility = !this.visibility;
    this.modalVisibility.emit(this.visibility);
  }
  
  closeModal() {
    console.log('this.modalContentTemplate', this.modalContentTemplate)
    this.modalVisibility.emit(false);
  }
}
