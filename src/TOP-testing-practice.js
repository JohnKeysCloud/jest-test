export default {
  capitalizeFirstLetter: (string) => {
    if (typeof string !== 'string') {
      throw new TypeError('Argument must be a string');
    }

    if (string === '') return '';

    const [first, ...rest] = [...string]; // ? {1}

    return first.toUpperCase() + rest.join('');
  },
  reverseString: (string) => {
    if (typeof string !== 'string') {
      throw new TypeError('Argument must be a string');
    }

    if (string === '') return '';

    return [...string].reverse().join('');

    // * Alternatively, you could use `string.split('')`:
    // * return string.split('').reverse().join('');
    // * or a for loop to build the string (which saves space because array creation in such a method isn't necessary)
  },
  calculator: (() => {
    // 💭 --------------------------------------------------------------
    // 💭 Private
    
    const _isNumber = (number) => typeof number === 'number';

    const _isSingleNumber = (numbers) => {
      if (!numbers.length) return 0;
      if (numbers.length === 1) {
        if (_isNumber(numbers[0])) return numbers[0]; // Return the single number if it is a valid number
        throw new TypeError(typeErrorMessage); // Handle invalid single value
      }
      return false;
    };

    const typeErrorMessage = 'Argument(s) must be of the type: "number".';

    // 💭 --------------------------------------------------------------
    // 💭 Public

    const add = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;
      
      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      return numbers.reduce((acc, curr) => {
        if (_isNumber(curr)) {
          return acc + curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }, 0); // acc initial 
    };

    const subtract = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;

      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      return numbers.reduce((acc, curr) => {
        if (_isNumber(curr)) {
          return acc - curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }); // acc initial (default value), numbers[0] skipped in reduce
    }

    const multiply = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;

      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      return numbers.reduce((acc, curr) => {
        if (_isNumber(curr)) {
          return acc * curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }, 1); // acc initial 
    };

    const divide = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;

      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      if (numbers[0] === 0) return 0;

      return numbers.reduce((acc, curr) => {
        if (curr === 0) throw new Error('You cannot divide by zero.');

        if (_isNumber(curr)) {
          return acc / curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }); // acc initial (default value), numbers[0] skipped in reduce
    };

    return {
      add,
      subtract,
      multiply,
      divide
    };
  }),
  caesarCipher: (string, shiftFactor) => {

  },
  analyzeArray: (array) => {

  }
}


// 💭 --------------------------------------------------------------

// ? {1}
// The only real benefit to using the spread operator in this scenario is readability. 
// We are telling the reader that we are destructuring an explicit array instead of an 
// implicit one created due to the iterability of strings. `string` would do the same 
// in the above.

// > --------------------------------------------------------------

// ? {2}