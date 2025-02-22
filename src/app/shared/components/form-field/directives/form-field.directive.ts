import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormField]',
  standalone: true,
})
export class FormFieldDirective {
  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);

  constructor() {
    this._renderer.addClass(this._el.nativeElement, 'field__input');
  }
}
