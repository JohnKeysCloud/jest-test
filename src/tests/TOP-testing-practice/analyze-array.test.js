import TOPTestingPractice from '../../TOP-testing-practice';

const analyzeArray = TOPTestingPractice.analyzeArray;

describe(`analyzeArray`, () => {

  describe('Function Integrity', () => {
    test('Does `analyzeArray` function exist', () => {
      expect(analyzeArray).toBeDefined();
    });

    const argumentTestCases = [
      { input: {}, valid: false },
      { input: '', valid: false },
      { input: 9, valid: false },
      { input: [], valid: true },
    ];
    test.each(argumentTestCases)(
      'Arguments are valid: %p',
      ({ input, valid }) => {
        if (!valid) {
          expect(() => analyzeArray(input)).toThrow(TypeError);
        } else {
          expect(() => analyzeArray(input)).not.toThrow();
        }
      }
    );

    const arrayValueTestCases = [
      { input: [1, 2, 3], valid: true },
      { input: ['1', 2, 3], valid: false },
      { input: [1, {}, 3], valid: false },
    ];
    test.each(arrayValueTestCases)(
      'Does `array` argument include non-numbers: %o',
      ({ input, valid }) => {
        if (valid) {
          expect(() => analyzeArray(input)).not.toThrow();
        } else {
          expect(() => analyzeArray(input)).toThrow(TypeError);
        }
      }
    );

    test('Does `analyzeArray` return an object', () => {
      expect(typeof analyzeArray([])).toBe('object');
    });    
  });

  describe('Basic Functionality', () => {
    const basicTestCases = [
      {
        input: [42],
        expected: {
          average: 42,
          min: 42,
          max: 42,
          length: 1
        }
      },
      {
        input: [3, 6, 9],
        expected: {
          average: 6,
          min: 3,
          max: 9,
          length: 3
        }
      },
      {
        input: [0.1, 0.2],
        expected: {
          average: 0.15,
          min: 0.1,
          max: 0.2,
          length: 2
        }
      }
    ];

    test.each(basicTestCases)(
      'Test Integer and Decimal Input',
      ({ input, expected }) => {
        expect(analyzeArray(input)).toEqual(expected);
      }
    );
  });
});



