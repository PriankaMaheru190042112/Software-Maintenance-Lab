const { Add, Subtract, Multiply, Divide, Pow, Modulo } = require('../src/advanced');

describe('Advanced Calculator Operations', () => {
    describe('Basic Operations', () => {
        test('Add', () => {
            expect(Add(1, 2)).toBe(3);
            expect(Add(-5, 2)).toBe(-3);
            expect(Add(0, 0)).toBe(0);
        });

        test('Subtract', () => {
            expect(Subtract(5, 2)).toBe(3);
            expect(Subtract(-5, 2)).toBe(-7);
            expect(Subtract(0, 0)).toBe(0);
        });

        test('Multiply', () => {
            expect(Multiply(3, 4)).toBe(12);
            expect(Multiply(-3, 4)).toBe(-12);
            expect(Multiply(0, 0)).toBe(0);
        });

        test('Divide', () => {
            expect(Divide(10, 2)).toBe(5);
            expect(Divide(-10, 2)).toBe(-5);
            expect(() => Divide(10, 0)).toThrow('Divide by zero');
        });
    });

    describe('Advanced Operations', () => {
        test('Pow', () => {
            expect(Pow(2, 3)).toBe(8);
            expect(Pow(-2, 3)).toBe(-8);
            expect(Pow(2, -3)).toBeCloseTo(0.125);
        });

        test('Modulo', () => {
            expect(Modulo(10, 3)).toBe(1);
            expect(Modulo(10, -3)).toBe(1);
            expect(Modulo(-10, 3)).toBe(-1);
            expect(Modulo(-10, -3)).toBe(-1);
        });
    });
});
