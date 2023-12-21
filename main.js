"use strict";
import { init } from "./constants";
import { showNumber } from "./helpers";

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
  numOper,
} = init();

function calculatorCreator() {
  let firstOperand = "";
  let secondOperand = "";
  let firstOperandNumber = 0;
  let secondOperandNumber = 0  

  const updateLowerUI = (value) => {
    firstOperand += value;
    firstOperandNumber = parseInt(firstOperand)
    console.log('first operand number' ,firstOperandNumber);
    result.textContent = firstOperand;
    console.log("first operand", firstOperand);
  };

  const add = (a, b) => a + b;

  const updateUpperUI = () => {
    console.log(firstOperand);
    secondOperand += firstOperand;
    // console.log("second operand", parseInt(secondOperand, 10));
    calculations.textContent = secondOperand;
    secondOperandNumber = parseInt(secondOperand, 10)
    console.log(secondOperandNumber);
    firstOperand = "";
    result.textContent = "";
  };

  return {
    firstOperand,
    secondOperand,
    updateLowerUI,
    updateUpperUI,
    add
  };
}

const calculator = calculatorCreator();

numOper.forEach((numO) => {
  numO.addEventListener("click", function (e) {
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
