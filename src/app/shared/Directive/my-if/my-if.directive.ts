import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  private hasView: Boolean = false
  constructor(
    private tamplateRef: TemplateRef<any>,
    private viewContain: ViewContainerRef
  ) { }
  @Input() set appMyIf(condition: Boolean) {
    if (!condition && !this.hasView) {
      this.viewContain.createEmbeddedView(this.tamplateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContain.clear();
      this.hasView = false;
    }
  }
}
