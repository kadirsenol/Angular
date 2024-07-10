import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructralIndex]'
})
export class StructralIndexDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainerRef : ViewContainerRef
  ) { }

  @Input() set appStructralIndex(value : string[]){
    for(let i =0 ; i < value.length ;i++)
    this.viewContainerRef.createEmbeddedView(this.templateRef,{
      isimler : value[i],
      index : i
    })
  }

}
