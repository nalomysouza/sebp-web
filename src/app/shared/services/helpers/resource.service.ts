import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Pageable } from '../../model/helpers/pageable.model';
import { QueryOptions } from '../../model/helpers/query.options';
import { Resource } from '../../model/helpers/resource.model';
import { Serializer } from '../../serializables/helpers/serializer.model';
import { API } from './api';


export class ResourceService<T extends Resource> {

  protected url: string = API.concat("/v1");

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

  public update(id: number, item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${id}`,
        this.serializer.toJson(item)).pipe(
          map(data => this.serializer.fromJson(data) as T),
          catchError(this.handleError)
        );
  }

  public enabled(item: T): Observable<any> {
    let body = { id: item.id, enabled: !item.enabled };
    return this.httpClient.put(`${this.url}/${this.endpoint}/enabled`, body);
  }

  public disabled(item: T): Observable<any> {
    let body = { id: item.id, enabled: !item.enabled };
    return this.httpClient.put(`${this.url}/${this.endpoint}/disabled`, body);
  }

  public findById(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`).pipe(
        map(data => this.serializer.fromJson(data) as T),
        catchError(this.handleError)
      );
  }

  public all(): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/all`)
      .pipe(
        map((data: any) => this.convertData(data)),
      );
  }

  public allPageable(pageIndex?: number, pageSize?: number): Observable<Pageable<T>> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?page=${pageIndex ? pageIndex : 0}&size=${pageSize ? pageSize : 12}`)
      .pipe(
        map((data: any) => data),
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
