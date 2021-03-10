import { Municipio } from "./municipio.model";

export class Endereco {
  public id?: number;
  public nome?: string;
  public logradouro?: string;
  public numero?: string;
  public cep?: number;
  public complemento?: string;
  public bairro?: string;
  public municipio?: Municipio;
}
