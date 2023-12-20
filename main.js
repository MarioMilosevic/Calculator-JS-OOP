"use strict";
import { init } from "./constants";

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
} = init();

function calculatorCreator() {
  let firstOperand = "";
  let secondOperand = "";

  const updateUI = (number) => {
    result.textContent = number;
  };

  return {
    firstOperand,
    secondOperand,
    updateUI,
  };
}

const calculator = calculatorCreator();

number1.addEventListener("click", function (e) {
  const target = e.target.innerText
  calculator.updateUI(target)
});
