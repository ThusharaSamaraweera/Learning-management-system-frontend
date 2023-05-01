import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[appSidebarContentTemplate]' })
export class NgSidebarContentTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
@Directive({ selector: '[appSidebarHeaderTemplate]' })
export class NgSidebarHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
@Directive({ selector: '[appSidebarFooterTemplate]' })
export class NgSidebarFooterTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
