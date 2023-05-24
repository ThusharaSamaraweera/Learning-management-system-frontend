import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[appCustomModalHeaderTemplate]' })
export class NgCustomModalHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
@Directive({ selector: '[appCustomModalContentTemplate]' })
export class NgCustomModalContentTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
@Directive({ selector: '[appCustomModalFooterTemplate]' })
export class NgCustomModalFooterTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
