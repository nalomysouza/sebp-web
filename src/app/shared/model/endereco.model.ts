import { Municipio } from "./municipio.model";

export class Endereco {
  public id?: number;
  public logradouro!: string;
  public numero?: number;
  public complemento?: string;
  public bairro?: string;
  public cep?: number;
  public municipio?: Municipio;
}
