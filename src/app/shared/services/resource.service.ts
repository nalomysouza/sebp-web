import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QueryOptions } from '../model/helpers/query.options';
import { Resource } from '../model/helpers/resource.model';
import { Serializer } from '../serializables/serializer.model';
import { API } from './api';


export class ResourceService<T extends Resource> {

  protected url: string = API;

  constructor(
    protected httpClient: HttpClient,
    protected endpoint: string,
    protected serializer: Serializer) { }

  public save(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item)).pipe(
        map(data => this.serializer.fromJson(data) as T),
        catchError(this.handleError)
      );
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item)).pipe(
          map(data => this.serializer.fromJson(data) as T),
          catchError(this.handleError)
        );
  }

  public saveOrUpdate(item: T): Observable<T> {
    if (!item.id) {
      return this.save(item);
    } else {
      return this.update(item);
    }
  }

  public findOne(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`).pipe(
        map(data => this.serializer.fromJson(data) as T),
        catchError(this.handleError)
      );
  }

  public findAll(): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/all`)
      .pipe(
        map((data: any) => this.convertData(data)),
      );
  }

  public findAllPageable(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(
        map((data: any) => this.convertData(data.content)),
      );
  }

  public delete(item: T): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}/${this.endpoint}/${item.id}`);
  }

  public search(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/search?${queryOptions.toQueryString()}`).pipe(
        map((data: any) => this.convertData(data.content)),
        catchError(this.handleError)
      );
  }

  protected convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }

  protected handleError(error: Response | any) {
    console.error(error.message || error);
    return throwError(error);
  }

  get urlEndpoint() {
    return `${this.url}/${this.endpoint}`;
  }
}
