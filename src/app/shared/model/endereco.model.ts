import { Municipio } from "./municipio.model";

export class Endereco {
  public id?: number;
  public logradouro!: string;
  public numero?: string;
  public complemento?: string;
  public bairro?: string;
  public cep?: string;
  public municipio?: Municipio;
}
