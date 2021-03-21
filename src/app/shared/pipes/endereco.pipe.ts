import { Pipe, PipeTransform } from '@angular/core';
import { Endereco } from '../model/endereco.model';

@Pipe({
  name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {
  /**
   * Retorna o objeto endereço no formato: Endereço completo (Rua, Número, Complemento, CEP, Cidade e UF).
   * @param endereco
   * @returns string | undefined
   */
  transform(value: Endereco | any): string {
    if (value) {
      let { logradouro, numero, bairro, complemento, cep, municipio } = value;
      return logradouro
        .concat(numero ? + ', ' + numero : ', s/n')
        .concat(bairro ? +', ' + bairro : '')
        .concat(complemento ? +', ' + complemento : '')
        .concat(cep ? + ', ' + cep : '')
        .concat(municipio ? +', ' + municipio.nome : '');
    }
    return 'Não Informado';
  }
}
