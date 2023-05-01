import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgSidebarContentTemplateDirective, NgSidebarFooterTemplateDirective, NgSidebarHeaderTemplateDirective } from '../../directive/custom-sidebar-template.directive';


@Component({
  selector: 'app-custom-left-sidebar',
  templateUrl: './custom-left-sidebar.component.html',
})
export class CustomLeftSidebarComponent {
  @Output() sidebarVisibility = new EventEmitter();
  @Input() styleClass!: string;
  @Input() position!: string;
  @Input() baseZIndex!: number;
  @Input() visibility: boolean = true;
  @Input() showCloseIcon: boolean = false;

  // custom templates
  @ContentChild(NgSidebarHeaderTemplateDirective, { read: TemplateRef })
  sidebarHeaderTemplate: TemplateRef<any> | undefined;

  @ContentChild(NgSidebarContentTemplateDirective, { read: TemplateRef })
  sidebarContentTemplate: TemplateRef<any> | undefined;
  
  @ContentChild(NgSidebarFooterTemplateDirective, { read: TemplateRef })
  sidebarFooterTemplate: TemplateRef<any> | undefined;
  constructor() {}

  toggleSidebar() {
    this.visibility = !this.visibility;
    this.sidebarVisibility.emit(this.visibility);
  }

  hideSidebar() {
    this.sidebarVisibility.emit(false);
  }
}
