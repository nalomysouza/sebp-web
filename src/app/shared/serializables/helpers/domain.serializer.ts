import { Serializer } from './serializer.model';
import { Resource } from '../../model/helpers/resource.model';

export class DomainSerializer<T extends Resource> implements Serializer {

  constructor(private domain: new () => T) { }

  getDomain(): T {
    return new this.domain();
  }

  public fromJson(json: any): T {
    let _domain: any = this.getDomain();
    Object.keys(json).forEach(k => _domain[k] = json[k]);
    return _domain;
  }

  public toJson(_domain: T | any): any {
    const json: any = {};
    Object.keys(_domain).forEach(k => json[k] = _domain[k]);
    return json;
  }
}
