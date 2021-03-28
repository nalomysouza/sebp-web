import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPtbr'
})
export class BooleanPtbrPipe implements PipeTransform {

  transform(value: boolean | undefined): string {
    if (value) {
      return value ? 'Sim' : 'Não';
    }
    return '-'
  }

}
