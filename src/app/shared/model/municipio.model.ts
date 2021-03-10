import { Microrregiao } from "./microrregiao.model";
export class Municipio {
  public id!: number;
  public nome!: string;
  public microrregiao?: Microrregiao;
}
