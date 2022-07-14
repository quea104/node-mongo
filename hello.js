console.log('Hello World!');

const calc = require('./module_one'); // JS파일 = 모듈
console.log(calc(10,20));

const two = require('./module_two');
console.log(two.subtractTwoNumbers(10,20));
console.log(two.myNumber);