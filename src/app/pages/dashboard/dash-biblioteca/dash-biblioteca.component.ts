import { HttpClient } from '@angular/common/http';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BibliotecaDataSource } from './services/biblioteca-datasource';
@Component({
  selector: 'app-dash-biblioteca',
  templateUrl: './dash-biblioteca.component.html',
  styleUrls: ['./dash-biblioteca.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashBibliotecaComponent implements OnInit, OnDestroy {

  dataSource = new BibliotecaDataSource(this.http);
  private destroy$ = new Subject();

  constructor(private http: HttpClient, private nzMessage: NzMessageService) { }

  ngOnInit(): void {
    this.dataSource
      .completed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.nzMessage.warning('Infinite List loaded all');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
