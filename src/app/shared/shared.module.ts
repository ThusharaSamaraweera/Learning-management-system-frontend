import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { PrimeNgModules } from './primeng-module';
import { FormsModule } from '@angular/forms';

// atoms and molecules
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { TextInputComponent } from './components/form/form-input/text-input.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';

// directives
import {
  NgCustomModalContentTemplateDirective,
  NgCustomModalFooterTemplateDirective,
  NgCustomModalHeaderTemplateDirective,
} from './directive/custom-modal-template.directive';

// pipe
import { FormControlPipe } from './pipe/formControl.pipe';
import { CoreModule } from '../core/core.module';
import { UserInitialsPipe } from './pipe/user-initials.pipe';
import { CustomLeftSidebarComponent } from './components/custom-left-sidebar/custom-left-sidebar.component';
import {
  NgSidebarContentTemplateDirective,
  NgSidebarFooterTemplateDirective,
  NgSidebarHeaderTemplateDirective,
} from './directive/custom-sidebar-template.directive';

@NgModule({
  declarations: [
    //components
    CustomModalComponent,
    TextInputComponent,
    FormLabelComponent,
    CustomLeftSidebarComponent,
    // directives
    // modal
    NgCustomModalHeaderTemplateDirective,
    NgCustomModalContentTemplateDirective,
    NgCustomModalFooterTemplateDirective,
    // sidebar
    NgSidebarContentTemplateDirective,
    NgSidebarHeaderTemplateDirective,
    NgSidebarFooterTemplateDirective,
    // pipes
    FormControlPipe,
    UserInitialsPipe,
  ],
  imports: [PrimeNgModules, CommonModule, FormsModule, CoreModule],
  exports: [
    PrimeNgModules,
    // pipes
    FormControlPipe,
    UserInitialsPipe,
    // custom components
    CustomModalComponent,
    TextInputComponent,
    FormLabelComponent,
    CustomLeftSidebarComponent,
    //Directives
    // modal
    NgCustomModalHeaderTemplateDirective,
    NgCustomModalContentTemplateDirective,
    NgCustomModalFooterTemplateDirective,
    // sidebar
    NgSidebarContentTemplateDirective,
    NgSidebarHeaderTemplateDirective,
    NgSidebarFooterTemplateDirective,
  ],
  providers: [],
})
export class SharedModule {}
