import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModules } from './primeng-module';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import {
  NgCustomModalContentTemplateDirective,
  NgCustomModalFooterTemplateDirective,
  NgCustomModalHeaderTemplateDirective,
} from './directive/custom-modal-template.directive';

@NgModule({
  declarations: [
    CustomModalComponent,
    NgCustomModalHeaderTemplateDirective,
    NgCustomModalContentTemplateDirective,
    NgCustomModalFooterTemplateDirective,
  ],
  imports: [PrimeNgModules, CommonModule],
  exports: [
    PrimeNgModules,
    CustomModalComponent,
    NgCustomModalHeaderTemplateDirective,
    NgCustomModalContentTemplateDirective,
    NgCustomModalFooterTemplateDirective,
  ],
  providers: [],
})
export class SharedModule {}
