import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set tooltipMessege(msg: string) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
