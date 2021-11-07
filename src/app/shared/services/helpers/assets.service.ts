import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private readonly IMG: string = 'assets/img/';

  constructor() { }

  /**
   * retorna o path da imagem passada por parametro.
   */
  public pathImg(name: string) {
    return this.IMG.concat(name);
  }
}
