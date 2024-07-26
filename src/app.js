import TOPTestingPractice from "./TOP-testing-practice.js";

const capitalizeFirstLetter = TOPTestingPractice.capitalizeFirstLetter;
console.log(capitalizeFirstLetter('testing')); // 'Testing'

const reverseString = TOPTestingPractice.reverseString;
console.log(reverseString('testing')); // 'gnitset'

const calculator = TOPTestingPractice.calculator();
console.log(calculator.add(6, -3)); //3
console.log(calculator.subtract(9, 6)); // 3
console.log(calculator.multiply(3, 3)); // 9
console.log(calculator.divide(9, 3)); // 3

const caesarCipher = TOPTestingPractice.caesarCipher;
console.log(caesarCipher('i love you', 3)); // 'l oryh brx'
console.log(caesarCipher('l oryh brx', -3)); // 'i love you'

const analyzeArray = TOPTestingPractice.analyzeArray;
const arrays = [
  [3.14, 1.618, 42, 432],
  [3, 3, 3],
  [
    'K'.charCodeAt(0),
    'e'.charCodeAt(0),
    'y'.charCodeAt(0),
    's'.charCodeAt(0)
  ]
];
arrays.forEach(array => {
  console.log(analyzeArray(array));
});
