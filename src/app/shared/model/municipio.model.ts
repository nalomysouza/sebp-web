import { Microrregiao } from "./microrregiao.model";
export class Municipio {
  public id!: number;
  public descricao!: string;
  public microrregiao?: Microrregiao;
}
