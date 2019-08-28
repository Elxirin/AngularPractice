import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostBinding('style.border')
  border: string;

  @HostListener('click')
  onclick() {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
    this.border = '5px solid red';
  }
}
