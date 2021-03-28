import { Endereco } from "./endereco.model";
import { Resource } from "./helpers/resource.model";
import { Orgao } from "./orgao.model";
import { TipoBiblioteca } from "./tipo-biblioteca.model";

export class Biblioteca extends Resource {
  public nome?: string;
  public email?: string;
  public dataFundacao?: Date;
  public atoCriacao?: string;
  public populacao?: string;
  public sigla?: string;
  public endereco?: Endereco;
  public telefone?: string;
  public fax?: string;
  public orgao?: Orgao;
  public tipoBiblioteca?: TipoBiblioteca;
  public bibliotecaPolo?: boolean;
  public implantadaPeloPLA?: boolean;
  public cadastroSNBP?: boolean;
  public anoCadastroSNBP?: number;
  public observacoes?: string;
}
