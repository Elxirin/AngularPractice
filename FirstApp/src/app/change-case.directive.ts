import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('blur')
  onBlur() {
    const changedValue = this.el.nativeElement.value.toUpperCase();
    this.renderer.setElementProperty(this.el.nativeElement, 'value', changedValue);
  }
}
