import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
  OnInit,
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
export class CustomModalComponent implements OnInit {
  @Input() visibility!: boolean;
  @Input() width!: string;
  @Input() headerLbl!: string;
  @Output() modalVisibility = new EventEmitter();
  @Input() width1440!: string;
  @Input() width1200!: string;
  @Input() width576!: string;

  // custom templates
  @ContentChild(NgCustomModalHeaderTemplateDirective, { read: TemplateRef })
  modalHeaderTemplate: TemplateRef<any> | undefined;
  @ContentChild(NgCustomModalContentTemplateDirective, { read: TemplateRef })
  modalContentTemplate: TemplateRef<any> | undefined;
  @ContentChild(NgCustomModalFooterTemplateDirective, { read: TemplateRef })
  modalFooterTemplate: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.visibility = !this.visibility;
    this.modalVisibility.emit(this.visibility);
  }

  closeModal() {
    this.modalVisibility.emit(false);
  }
}
