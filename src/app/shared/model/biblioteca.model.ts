import { Endereco } from "./endereco.model";
import { Orgao } from "./orgao.model";
import { TipoBiblioteca } from "./tipo-biblioteca.model";

export class Biblioteca {
  public id!: number;
  public nome?: string;
  public email?: string;
  public dataFundacao?: Date;
  public atoCriacao?: string;
  public populacao?: string;
  public sigla?: string;
  public endereco?: Endereco;
  public telefone?: string;
  public celular?: string;
  public fax?: string;
  public orgao?: Orgao;
  public tipoBiblioteca?: TipoBiblioteca;
  public bibliotecaPolo?: Boolean;
  public implantadaPeloPLA?: Boolean;
  public cadastroSNBP?: Boolean;
  public anoCadastroSNBP?: number;
  public observacoes?: string;
}
