const operators = document.querySelectorAll(".operators");
const addOperator = document.getElementById("add");
const subOperator = document.getElementById("subtract");
const multiOperator = document.getElementById("multiply");
const divOperator = document.getElementById("divide");
const numberBTN = document.querySelectorAll(".numbers");
const screen = document.querySelector(".display");
const deleteBTN = document.getElementById("delete");
const clearBTN = document.getElementById("clear");
const equalsBTN = document.getElementById("equals");

let defaultDisplay = "0";
let currentDisplay = "";

screen.textContent = defaultDisplay;

numberBTN.forEach((e) => {
  e.addEventListener("click", () => {
    defaultDisplay = "";
    let clicked = e.textContent;
    currentDisplay += clicked;
    screen.textContent = currentDisplay;
  });
});

deleteBTN.addEventListener("click", () => {
  if (currentDisplay > 0) {
    currentDisplay = currentDisplay.slice(0, -1);
    screen.textContent = currentDisplay;
  }
});

clearBTN.addEventListener("click", (e) => {
  currentDisplay = "";
  defaultDisplay = "0";
  screen.textContent = defaultDisplay;
});

const add = function (...addition) {
  for (const adds of addition) {
    return (add += addition);
  }
};

const subtract = function (sub1, sub2) {
  return sub1 - sub2;
};

const multiply = function (multi1, multi2) {
  return multi1 * multi2;
};

const divide = function (div1, div2) {
  return div1 / div2;
};

function operate(operator, ...numbers) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == subOperator) {
    return subtract(num1, num2);
  } else if (operator == multiOperator) {
    return multiply(num1, num2);
  } else if (operator == divOperator) {
    return divide(num1, num2);
  }
}
