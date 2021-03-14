export class Pageable<T> {
  public content: Array<T> = [];
  public empty?: boolean;
  public first?: boolean;
  public last?: boolean;

  public number: number = 1;
  public numberOfElements?: number;
  public size: number = 12;
  public sort?: { sorted: false, unsorted: true, empty: true }
  public totalElements: number = 0;
  public totalPages?: number;
}
