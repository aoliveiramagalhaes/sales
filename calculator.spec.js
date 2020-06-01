const calculator = require("./calculator");

// to run tests go to the terminal and execute yarn jest

describe("sum", () => {
  it("sums 1+1", () => {
    expect(calculator.sum(1, 1)).toBe(2);
  });

  it("sums 1+2", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("subtracts 1-1", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  it("subtracts 1-2", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
});

describe("multiplication", () => {
  it("multiplies 1x1", () => {
    expect(calculator.multiplication(1, 1)).toBe(1);
  });

  it("multiplies 2x5", () => {
    expect(calculator.multiplication(2, 5)).toBe(10);
  });
});

describe("division", () => {
  it("divides 1/1", () => {
    expect(calculator.division(1, 1)).toBe(1);
  });

  it("divides 10/5", () => {
    expect(calculator.division(10, 5)).toBe(2);
  });

  it("divides 10/0", () => {
    expect(calculator.division(10, 0)).toBe(Infinity);
  });
});