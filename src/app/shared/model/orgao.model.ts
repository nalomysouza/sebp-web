import { Endereco } from "./endereco.model";
import { Resource } from "./helpers/resource.model";

export class Orgao extends Resource {
  public nome?: string;
  public email?: string;
  public telefone?: string;
  public fax?: string;
  public endereco?: Endereco;
}
