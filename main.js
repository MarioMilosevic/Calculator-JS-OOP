"use strict";
import { init } from "./constants";
import { showNumber, addFn, subtractFn, divideFn, multiplyFn } from "./helpers";

const {
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
  number0,
  numbers,
  plus,
  minus,
  multiply,
  divide,
  equals,
  clear,
  dot,
  del,
  result,
  calculations,
  operators,
} = init();

function calculatorCreator() {
  let firstOperand = "";
  let secondOperand = "";
  let operation = "";
  let res = 0;

  const updateState = () => {};

  const updateUI = (value) => {
    result.textContent += value
  };
  return {
    firstOperand,
    secondOperand,
    updateState,
    updateUI,
  };
}

const calculator = calculatorCreator();
calculator.updateState();

numbers.forEach((num) => {
  num.addEventListener("click", function (e) {
    // uzme event vrijednost, i updateUI sa targetom
    showNumber(e, calculator);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    calculator.updateUpperUI();
  });
});

// equals.addEventListener("click", function () {
//   calculator.updateUpperUI();
// });
