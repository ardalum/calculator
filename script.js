const operators = document.querySelectorAll(".operators");
const addOperator = document.getElementById("add");
const subOperator = document.getElementById("subtract");
const multiOperator = document.getElementById("multiply");
const divOperator = document.getElementById("divide");
const numberBTN = document.querySelectorAll(".numbers");
const screen = document.querySelector(".current-operation");
const deleteBTN = document.getElementById("delete");
const clearBTN = document.getElementById("clear");
const equalsBTN = document.getElementById("equals");
let lastOperation = document.querySelector(".last-operation");
let defaultDisplay = "0";
let currentDisplay = "";

// Addition function
const add = function (num1, num2) {
  return num1 + num2;
};

// subtraction function
const subtract = function (sub1, sub2) {
  return sub1 - sub2;
};

// multiplication function
const multiply = function (multi1, multi2) {
  return multi1 * multi2;
};

// division function
const divide = function (div1, div2) {
  return div1 / div2;
};

// Default display on the screen will be 0 before clicking any of the number button
screen.textContent = defaultDisplay;

// this is for the buttons that was clicked
numberBTN.forEach((e) => {
  e.addEventListener("click", () => numberSelected(e));
});

function numberSelected(e) {
  // the default display will be empty when any of the number button is clicked
  defaultDisplay = "";
  // each of the button that was clicked will be stored to the clicked variable
  let clicked = e.textContent;
  // the currentDisplay will concatenate each number that was clicked
  currentDisplay += clicked;
  // the screen will be updated by the concatenated numbers
  screen.textContent = currentDisplay;
}

// this will delete one number at a time
deleteBTN.addEventListener("click", () => {
  if (currentDisplay > 0) {
    currentDisplay = currentDisplay.slice(0, -1);
    screen.textContent = currentDisplay;
  }
});

// this will clear the operation or numbers selected and goes back to the defaultDisplay which is zero
clearBTN.addEventListener("click", (e) => {
  currentDisplay = "";
  defaultDisplay = "0";
  screen.textContent = defaultDisplay;
  lastOperation.textContent = "";
  operatorCount = {};
});

//
operators.forEach((e) => {
  e.addEventListener("click", operatorFunc);
});

equalsBTN.addEventListener("click", operate);

// this will hold the first number
let firstNum;
// this will hold the second number to complete each operation
let secondNum;
//this is a place holder to hold the result, and or the last operation
let lastNum;
// this is a place holder for the result
let result;
// this will hold the value of the selected operator
let selectedOperator;
//the property of an object operatorCount to count the number of times the operator was clicked
let operator;
// this is the placeholder for an operator event that was clicked
let storedOperator = null;
// This is the object to count the number of times the operator was clicked
let operatorCount = {};

// function that will run when any of the operators was clicked
function operatorFunc(event) {
  // initial operation when an operator was clicked once
  if (!operatorCount[operator]) {
    storedOperator = event.target;
    selectedOperator = storedOperator.value;
    firstNum = Number(currentDisplay);
    lastOperation.textContent = `${currentDisplay}${selectedOperator}`;
    currentDisplay = "";
    operator = event.target.textContent;
    operatorCount[operator] = 0;
  }
  // count the number of operator click
  operatorCount[operator]++;

  // this will become TRUE when an operator is clicked twice
  if (operatorCount[operator] >= 2) {
    operate();
    storedOperator = event.target;
    selectedOperator = storedOperator.value;
    firstNum = result;
    lastOperation.textContent = `${firstNum}${selectedOperator}`;
  }
}

//This function will run when the equals button is clicked, or when more than one operator is clicked before clicking the equals button
function operate() {
  //the current display is a node string, it will be converted to number and pass it to the secondNum
  secondNum = Number(currentDisplay);
  if (storedOperator === addOperator) {
    lastNum = firstNum;
    result = add(firstNum, secondNum);
    firstNum = result;
    currentDisplay = "";
    screen.textContent = result;
    lastOperation.textContent = `${lastNum} + ${secondNum} =`;
    secondNum = 0;
  } else if (storedOperator == subOperator) {
    subtract(firstNum, secondNum);
    lastNum = firstNum;
    result = subtract(firstNum, secondNum);
    firstNum = result;
    currentDisplay = "";
    screen.textContent = result;
    lastOperation.textContent = `${lastNum} - ${secondNum} =`;
    secondNum = 0;
  } else if (storedOperator == multiOperator) {
    multiply(firstNum, secondNum);
    lastNum = firstNum;
    result = multiply(firstNum, secondNum);
    firstNum = result;
    currentDisplay = "";
    screen.textContent = result;
    lastOperation.textContent = `${lastNum} * ${secondNum} =`;
    secondNum = 0;
  } else if (storedOperator == divOperator) {
    divide(firstNum, secondNum);
    lastNum = firstNum;
    result = divide(firstNum, secondNum);
    firstNum = result;
    currentDisplay = "";
    screen.textContent = result;
    lastOperation.textContent = `${lastNum} / ${secondNum} =`;
    secondNum = 0;
  }
}

// this will listen to the keyboard event and will click the appropriate key on the screen
window.addEventListener("keydown", (e) => {
  // the ${e.code} is the code of the key that was pressed on the keyboard
  const key = document.querySelector(`button[data-key="${e.code}"]`);
  // the click function is to imitate the physical click on the screen on each press of the correct key
  key.click();
});
