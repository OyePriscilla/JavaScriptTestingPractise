const calculator = require('./calculator');

describe('Calculate addition of two numbers', () => {
    test('Add 2 and 2 to give 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test('Add 0.2 and 0.4 to give 0.6', () => {
        expect(calculator.add(0.2, 0.4)).toBeCloseTo(0.6);
    });

    test('Add 12 and 20 to give 32', () => {
        expect(calculator.add(12, 20)).toBe(32);
    });
});

describe('Calculate substraction of two numbers', () => {
    test('2 and 2 to give 0', () => {
        expect(calculator.subtract(2, 2)).toBe(0);
    });

    test('20 and 2 to give 0', () => {
        expect(calculator.subtract(20, 2)).toBe(18);
    });

    test('0.3 and 0.1 to give 0', () => {
        expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });
});

describe('Calculate addition of two numbers', () => {
    test('2 and 2 to give 1', () => {
        expect(calculator.divide(2, 2)).toBe(1);
    });

    test('20 and 2 to give 10', () => {
        expect(calculator.divide(20, 2)).toBe(10);
    });

    test('28.2 and 2 to give 1', () => {
        expect(calculator.divide(28.2, 2)).toBe(14.1);
    });
});

describe('Calculate addition of two numbers', () => {
    test('2 and 2 to give 4', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    });

    test('0 and 2 to give 0', () => {
        expect(calculator.multiply(0, 2)).toBe(0);
    });

    test('20 and 12 to give 4', () => {
        expect(calculator.multiply(20, 12)).toBe(240);
    });
});

