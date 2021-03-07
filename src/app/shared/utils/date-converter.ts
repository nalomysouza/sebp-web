export class DateConverter {
  static converter(data: string): Date {
    if (data) {
      const arrayData: number[] = data
        .split("-")
        .map((num, ind) => (ind === 1 ? +num - 1 : +num));
      return new Date(arrayData[0], arrayData[1], arrayData[2]);
    }
  }
}
