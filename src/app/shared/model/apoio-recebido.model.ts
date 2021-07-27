import { Biblioteca } from "./biblioteca.model";
import { Resource } from "./helpers/resource.model";

export class ApoioRecebido extends Resource {
  public proares?: boolean;
  public proaresDescricao?: string;
  public ubecm?: boolean;
  public ubecmDescricao?: string;
  public minc?: boolean;
  public mincDescricao?: string;
  public biblioteca?: Biblioteca;
}
