import { User } from "../user.model";

export class CurrentUser {
  constructor(public user: User, public token: string) { }
}
