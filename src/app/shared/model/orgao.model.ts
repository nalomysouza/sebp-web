import { Resource } from "./helpers/resource.model";
import { Municipio } from "./municipio.model";
export class Orgao extends Resource {
  public nome!: string;
  public email?: string;
  public telefone?: string;
  public fax?: string;
  public logradouro?: string;
  public numero?: string;
  public complemento?: string;
  public bairro?: string;
  public cep?: string;
  public municipio?: Municipio;
}
