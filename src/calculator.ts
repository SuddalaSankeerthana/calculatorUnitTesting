export default class Calculator {
  public add(x: number, y: number): number {
    return x + y;
  }
  public sub(x: number, y: number): number {
    return x - y;
  }
  public multiplication(x: number, y: number) {
    return x * y;
  }
  public division(x: number, y: number) {
    if (y != 0) {
      return x / y;
    }
    throw { name: 'Zero Division Error', message: 'Zero Division Error' };
  }
}
