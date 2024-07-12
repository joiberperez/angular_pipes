import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
  standalone: true
})
export class NumbersOnlyDirective {

  constructor(private element:ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.element.nativeElement;
    const initialValue = input.value;
    
    // Reemplazar todo lo que no sea números con una cadena vacía
    input.value = initialValue.replace(/[^0-9]*/g, '');
    

    
    input.value = this.formatNumber(input.value);
    if (initialValue !== input.value) {
      event.stopPropagation();
    }
  }


  

  private formatNumber(value: string): string {
    if (!value) return '';
    
    // Separar el número en grupos de tres dígitos
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
