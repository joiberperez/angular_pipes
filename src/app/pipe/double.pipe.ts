import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  standalone: true
})
export class DoublePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 2;
  }

}
