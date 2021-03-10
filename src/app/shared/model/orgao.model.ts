import { Endereco } from "./endereco.model";

export class Orgao {
  public id!: number;
  public nome?: string;
  public email?: string;
  public telefone?: string;
  public celular?: string;
  public fax?: string;
  public endereco?: Endereco;
}
