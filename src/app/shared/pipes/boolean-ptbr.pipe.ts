import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPtBr'
})
export class BooleanPtBrPipe implements PipeTransform {

  transform(value: boolean | undefined): string {
    return value ? 'Sim' : 'Não';
  }

}
