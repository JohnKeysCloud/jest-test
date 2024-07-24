import topTestingPractice from "./top-testing-practice.js";

const capitalizeFirstLetter = topTestingPractice.capitalizeFirstLetter;
console.log(capitalizeFirstLetter('testing')); // 'Testing'

const reverseString = topTestingPractice.reverseString;
console.log(reverseString('testing')); // 'gnitset'

const calculator = topTestingPractice.calculator();
console.log(calculator.add(6, -3)); //3
console.log(calculator.subtract(9, 6)); // 3
console.log(calculator.multiply(3, 3)); // 9
console.log(calculator.divide(9, 3)); // 3

const caesarCipher = topTestingPractice.caesarCipher;
console.log(caesarCipher('i love you', 3)); // 'l oryh brx'
console.log(caesarCipher('l oryh brx', -3)); // 'i love you'

const analyzeArray = topTestingPractice.analyzeArray;
