//creating a calculator

//variables
let firstNum;
let operator;
let secondNum;
 

//basic operations

// created a class version of calculator but going to return to function version
// class calculator {
//     constructor(num1 = 0, operator, num2 = 0) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.operator = operator;
//     }

//     setNumber(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }


// //addition function
//     add() {
//     return this.num1 + this.num2;
// }

// //subtraction
//  subtract() {
//     return this.num1 - this.num2;
// }

// //division
//  divide() {
//     return this.num1 / this.num2;
// }

// //multiply
//  multiply() {
//     return this.num1 * this.num2;
// }

// // Operate method to select the correct operation
// operate() {
//     switch (this.operator) {
//         case '+':
//             return this.add();
//         case '-':
//             return this.subtract();
//         case '/':
//             return this.divide();
//         case '*':
//             return this.multiply();
//         default:
//             return 'Invalid operator';
//     }
// }
// };

function addNum(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtractNum(firstNum, secondNum) {
    return firstNum - secondNum;
}

function divideNum(firstNum, secondNum) {
    return firstNum / secondNum;
}

function multiplyNum(firstNum, secondNum) {
    return firstNum * secondNum;
}