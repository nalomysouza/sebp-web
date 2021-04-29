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
      let { logradouro, numero, bairro, complemento, cep }: Endereco = value;

      if (this.isValid(logradouro)) {
        let _numero = this.isValid(numero) ? ', ' + numero : ', s/n';
        let _bairro = this.isValid(bairro) ? ', ' + bairro : '';
        let _complemento = this.isValid(complemento) ? ', ' + complemento : '';
        let _cep = this.isValid(cep) ? ', ' + cep : '';
        return logradouro + _numero + _bairro + _complemento + _cep;
      }
    }
    return '';
  }

  isValid(texto: string | any) {
    return !(texto === '' || texto === undefined || texto === null)
  }
}
