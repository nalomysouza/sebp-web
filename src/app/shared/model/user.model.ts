import { Resource } from "./helpers/resource.model";

export class User extends Resource {
  username!: string;
  email?: string;
  password?: string;
  roles?: string[];
}
