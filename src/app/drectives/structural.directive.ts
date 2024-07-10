import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }



  @Input() set appStructural(value: string) {
    if (value === "1") {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        deger: value
      })
    }
    else{
      this.viewContainerRef.clear();
    }
  }

}
