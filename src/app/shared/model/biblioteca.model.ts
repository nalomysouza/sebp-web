import { Resource } from "./helpers/resource.model";
import { Municipio } from "./municipio.model";
import { Orgao } from "./orgao.model";
import { TipoBiblioteca } from "./tipo-biblioteca.model";
export class Biblioteca extends Resource {
  public nome!: string;
  public email?: string;
  public dataFundacao?: Date;
  public atoCriacao?: string;
  public populacao?: string;
  public sigla?: string;
  public telefone?: string;
  public fax?: string;
  public bibliotecaPolo?: boolean;
  public implantadaPeloPLA?: boolean;
  public cadastroSNBP?: boolean;
  public anoCadastroSNBP?: number;
  public logradouro?: string;
  public numero?: string;
  public complemento?: string;
  public bairro?: string;
  public cep?: string;
  public municipio?: Municipio;
  public orgao?: Orgao;
  public tipoBiblioteca?: TipoBiblioteca;
  public observacoes?: string;
}
