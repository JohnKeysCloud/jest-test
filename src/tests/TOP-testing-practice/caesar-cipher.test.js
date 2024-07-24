import topTestingPractice from "../../top-testing-practice.js";

const caesarCipher = topTestingPractice.caesarCipher;

console.log(caesarCipher('abc', 3));

describe('`caesarCipher', () => {
  describe('Basic Functionality', () => {
    test('Does `caesarCipher` function exist', () => {
      expect(caesarCipher).toBeDefined();
    });

    describe('Passed arguments are valid', () => {
      // Is the first argument a `string`
      test.each([
        { input: [], expectedError: TypeError },
        { input: {}, expectedError: TypeError },
        { input: 3, expectedError: TypeError },
      ])('Is the first argument a `string`: "%#"',
        ({input, expectedError}) => {
          expect(() => caesarCipher(input)).toThrow(expectedError);
        }
      );

      // Is the second argument a `number`
      test.each([
        { input: ['', ''], expectedError: TypeError },
        { input: ['', []], expectedError: TypeError },
        { input: ['', {}], expectedError: TypeError }
      ])('Is the second argument a `number`: "%#"',
        ({input, expectedError}) => {
          expect(() => caesarCipher(...input)).toThrow(expectedError);
        }
      );
    });

    describe('Logic functionality', () => {
      [
        { input: ['xYz', 3], expected: 'aBc' },
        { input: ['@ss', 6], expected: '@yy' },
        { input: ['!123 ABT', 9], expected: '!123 JKC' },
        { input: ['AbC', -3], expected: 'XyZ' },
        { input: ['a#z%a *z', -6], expected: 'u#t%u *t'},
        { input: ['c', -9], expected: 't'},
      ].forEach(({ input, expected }) => {
        test(`Test String '${input[0]}' with shift factor of ${input[1]} to be "${expected}"`, () => {
          expect(caesarCipher(...input)).toBe(expected);
        });
      });
    });
  });

  describe('Edge Cases', () => {
    // !
  });
});