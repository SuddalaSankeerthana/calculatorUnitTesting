import Calculator from './calculator';
describe('test calculator', () => {
  test('addition', () => {
    const calculator = new Calculator();
    const result = calculator.add(5, 3);
    expect(result).toBe(5);
  });
  test('subtraction', () => {
    const calculator = new Calculator();
    const result = calculator.sub(2, 3);
    expect(result).toBe(-1);
  });
  test('multiplication', () => {
    const calculator = new Calculator();
    const result = calculator.multiplication(2, 3);
    expect(result).toBe(6);
  });
  test('divison with normal case', () => {
    const calculator = new Calculator();
    const result = calculator.division(10, 5);
    expect(result).toBe(2);
  });
  test('division with throwing error case', () => {
    const calculator = new Calculator();

    expect(() => calculator.division(10, 0)).toThrow('Zero Division Error');
  });
});
