import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { PrimeNgModules } from './primeng-module';
import { FormsModule } from '@angular/forms';

// atoms and molecules
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { TextInputComponent } from './components/form/text-input/text-input.component';

// directives
import {
  NgCustomModalContentTemplateDirective,
  NgCustomModalFooterTemplateDirective,
  NgCustomModalHeaderTemplateDirective,
} from './directive/custom-modal-template.directive';

// pipe
import { FormControlPipe } from './pipe/formControl.pipe';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    //components
    CustomModalComponent,
    TextInputComponent,
    // directives
    NgCustomModalHeaderTemplateDirective,
    NgCustomModalContentTemplateDirective,
    NgCustomModalFooterTemplateDirective,
    // pipes
    FormControlPipe,
  ],
  imports: [PrimeNgModules, CommonModule, FormsModule, CoreModule],
  exports: [
    PrimeNgModules,
    // custom components
    CustomModalComponent,
    TextInputComponent,
    //Directives
    NgCustomModalHeaderTemplateDirective,
    NgCustomModalContentTemplateDirective,
    NgCustomModalFooterTemplateDirective,
    // pipes
    FormControlPipe,
  ],
  providers: [],
})
export class SharedModule {}
