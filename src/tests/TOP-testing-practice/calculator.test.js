import topTestingPractice from "../../top-testing-practice";

// Test module
const calculator = topTestingPractice.calculator();

// Test data for basic functionality
const basicTestCases = {
  addition: [
    { input: [1, 2], expected: 3 },
    { input: [-3, 9], expected: 6 },
    { input: [4, 5], expected: 9 }
  ],
  subtraction: [
    { input: [9, 6], expected: 3 },
    { input: [3, -3], expected: 6 },
    { input: [12, 3], expected: 9 }
  ],
  division: [
    { input: [9, 3], expected: 3 },
    { input: [18, 3], expected: 6 },
    { input: [27, 3], expected: 9 },
  ],
  multiplication: [
    { input: [1, 3], expected: 3 },
    { input: [-2, -3], expected: 6 },
    { input: [3, 3], expected: 9 }
  ]
};

const generalEdgeCases = [
  { input: [], expected: 0 },
  { input: [undefined], expectedError: Error },
  { input: [[]], expectedError: TypeError },
  { input: ['1', 2], expectedError: TypeError },
  { input: [21, ''], expectedError: TypeError },
  { input: [1, {}], expectedError: TypeError },
  { input: [1, null], expectedError: TypeError },
];

describe('`calculator`', () => {

  describe('Object existence', () => {
    test('Does `calculator` module exist', () => {
      expect(calculator).toBeDefined();
    });

    describe('Method existence', () => {
      test('Does `add` method exist', () => {
        expect(calculator.add()).toBeDefined();
      });
      test('Does `subtract` method exist', () => {
        expect(calculator.subtract()).toBeDefined();
      });
      test('Does `multiply` method exist', () => {
        expect(calculator.multiply()).toBeDefined();
      });
      test('Does `divide` method exist', () => {
        expect(calculator.divide()).toBeDefined();
      });
    });
  });

  describe('Basic Functionality', () => {
    // ? alternating between `test.each` and `forEach` 

    // addition
    test.each(basicTestCases.addition)(
      'Addition: %o',
      ({ input, expected }) => {
        expect(calculator.add(...input)).toBe(expected);
      }
    );

    // subtraction
    basicTestCases.subtraction.forEach(({ input, expected }) => {
      test(`Subtraction: ${input.join(' - ')} = ${expected}`, () => {
        expect(calculator.subtract(...input)).toBe(expected);
      });
    });

    // multiplication
    test.each(basicTestCases.multiplication)(
      'Multiplication: %o',
      ({ input, expected }) => {
        expect(calculator.multiply(...input)).toBe(expected);
      }
    );

    // division
    basicTestCases.division.forEach(({ input, expected }) => {
      test(`Division: ${input.join(' / ')} = ${expected}`, () => {
        expect(calculator.divide(...input)).toBe(expected);
      });
    });
  });

  describe('Edge Cases', () => {
    test.each(generalEdgeCases)(
      'Test edge cases: %p',
      ({ input, expectedError, expected }) => {
        if (expectedError) {
          expect(() => calculator.add(...input)).toThrow(TypeError);
          expect(() => calculator.subtract(...input)).toThrow(TypeError);
          expect(() => calculator.multiply(...input)).toThrow(TypeError);
          expect(() => calculator.divide(...input)).toThrow(TypeError);
        } else {
          expect(calculator.add(...input)).toBe(expected);
          expect(calculator.subtract(...input)).toBe(expected);
          expect(calculator.multiply(...input)).toBe(expected);
          expect(calculator.divide(...input)).toBe(expected);
        }
      }
    );

    test('Division by zero', () => {
      expect(() => calculator.divide(33, 0)).toThrow(Error);
    });
  });
}); 
