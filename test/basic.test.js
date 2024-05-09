const calculator = require('../src/basic');

describe('Basic Calculator Operations', () => {
  // Test addition function
  describe('Addition', () => {
    var testData = [
      [1, 2, 3],
      [4, 5, 9],
      [3, 12, 15],
      [4, 6, 10],
      [0, 89, 89],
      [-17, -35, -52],
      [65, -12, 53],
      [-78, 24, -54]   //huhub
    ];

    test.each(testData)('adds %i + %i to equal %i', (a, b, expected) => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });

  // Test subtraction function
  describe('Subtraction', () => {
    var testData = [
      [3, 2, 1],
      [9, 5, 4],
      [15, 12, 3],
      [10, 6, 4],
      [89, 0, 89],
      [-52, -35, -17],
      [53, -12, 65],
      [-54, 24, -78]
    ];

    test.each(testData)('subtracts %i - %i to equal %i', (a, b, expected) => {
      expect(calculator.subtract(a, b)).toBe(expected);
    });
  });

  // Test multiplication function
  describe('Multiplication', () => {
    var testData = [
      [2, 3, 6],
      [4, 5, 20],
      [3, 12, 36],
      [4, 6, 24],
      [0, 89, 0],
      [-17, -35, 595],
      [65, -12, -780],
      [-78, 24, -1872]
    ];

    test.each(testData)('multiplies %i * %i to equal %i', (a, b, expected) => {
      expect(calculator.multiply(a, b)).toBe(expected);
    });
  });

  // Test division function
  describe('Division', () => {
    var testData = [
      [6, 2, 3],
      [20, 5, 4],
      [36, 12, 3],
      [24, 6, 4],
      [0, 89, 0],
      [-17, -35, 0.4857142857142857],
      [65, -13, -5],
      [-1872, 24, -78]
    ];

    test.each(testData)('divides %i / %i to equal %i', (a, b, expected) => {
      expect(calculator.divide(a, b)).toBe(expected);
    });
  });
});
