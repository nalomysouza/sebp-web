import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Biblioteca } from "src/app/shared/model/biblioteca.model";
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { takeUntil } from "rxjs/operators";
import { API } from 'src/app/shared/services/helpers/api';

export class BibliotecaDataSource extends DataSource<Biblioteca> {
  private pageSize = 10;
  private cachedData: Biblioteca[] = [];
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<Biblioteca[]>(this.cachedData);
  private complete$ = new Subject<void>();
  private disconnect$ = new Subject<void>();

  constructor(private http: HttpClient) {
    super();
  }

  completed(): Observable<void> {
    return this.complete$.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<Biblioteca[]> {
    this.setup(collectionViewer);
    return this.dataStream;
  }

  disconnect(): void {
    this.disconnect$.next();
    this.disconnect$.complete();
  }

  private setup(collectionViewer: CollectionViewer): void {
    this.fetchPage(0);
    collectionViewer.viewChange.pipe(takeUntil(this.complete$), takeUntil(this.disconnect$)).subscribe(range => {
      if (this.cachedData.length >= 50) {
        this.complete$.next();
        this.complete$.complete();
      } else {
        const endPage = this.getPageForIndex(range.end);
        this.fetchPage(endPage + 1);
      }
    });
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number): void {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    this.http
      .get(API.concat(`/bibliotecas?page=${page ? page : 0}&size=${this.pageSize}`))
      .subscribe((response: any) => {
        this.cachedData.splice(page * this.pageSize, this.pageSize, ...response.content);
        this.dataStream.next(this.cachedData);
      });
  }

}
