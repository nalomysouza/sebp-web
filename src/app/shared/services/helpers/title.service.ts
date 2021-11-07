import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  readonly APP_NAME = environment.appName

  constructor(private _titleService: Title) { }

  setTitlePage(page: string) {
    this._titleService.setTitle(this.APP_NAME.concat(' - ') + page);
  }

  getTitlePage() {
    return this._titleService.getTitle();
  }
}
