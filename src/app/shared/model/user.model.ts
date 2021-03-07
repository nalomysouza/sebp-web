import { Resource } from "./resource.model";

export class User extends Resource {
  public username: string | undefined;
  public email?: string;
  public password?: string;
}
