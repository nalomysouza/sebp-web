import { Resource } from "../../model/helpers/resource.model";

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
