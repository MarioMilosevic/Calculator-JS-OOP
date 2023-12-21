"use strict";
import { init } from "./constants";
import { addFn, subtractFn, divideFn, multiplyFn } from "./helpers";

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

  const updateState = (num1) => {
  firstOperand = num1
  };

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

const calculator = calculatorCreator()

numbers.forEach(num => num.addEventListener('click', function(e){
console.log(e.target.id);
const target = e.target.id
calculator.updateState(target)
calculator.updateUI(target)
}))
