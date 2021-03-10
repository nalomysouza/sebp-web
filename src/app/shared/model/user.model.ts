import { Resource } from "./helpers/resource.model";

export class User extends Resource {
  public username!: string;
  public email?: string;
  public password?: string;
}
