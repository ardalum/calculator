let add1;
let addOperator;
let add2;

function add(add1, add2) {
  return add1 + add2;
}

let sub1;
let subOperator;
let sub2;

function subtract(sub1, sub2) {
  return sub1 - sub2;
}

let multi1;
let multiOperator;
let multi2;

function multiply(multi1, multi2) {
  return multi1 * multi2;
}

let div1;
let divOperator;
let div2;

function divide(div1, div2) {
  return div1 / div2;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

const ops = operate("*", 2, 3);

console.log(ops);
