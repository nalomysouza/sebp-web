export class Pageable<T> {
  public content!: Array<T>;
  public empty?: boolean;
  public first?: boolean;
  public last?: boolean;

  public number?: number;
  public numberOfElements?: number;
  public size?: number;
  public sort?: { sorted: false, unsorted: true, empty: true }
  public totalElements?: number;
  public totalPages?: number;
}
