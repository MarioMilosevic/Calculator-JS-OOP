"use strict";
import { init } from "./constants";
import { getTarget, addFn, subtractFn, divideFn, multiplyFn } from "./helpers";

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

  const updateFirstOperand = (e) => {
    const target = getTarget(e);
    firstOperand += target;
    console.log('first operand prvi' , firstOperand);
  };

  const updateSecondOperand = (e) => {
    const target = getTarget(e);
    secondOperand = firstOperand;
    firstOperand = "";
    operation = target;
    console.log('first operand', firstOperand);
    console.log('second operand', secondOperand);
    console.log('operation', operation);
  };

  return {
    firstOperand,
    secondOperand,
    operation,
    updateFirstOperand,
    updateSecondOperand,
  };
}

const calculator = calculatorCreator();

let testOperator = "";
let testOperator2 = "";
let testOperation = "";

numbers.forEach((num) =>
  num.addEventListener("click", function (e) {
    calculator.updateFirstOperand(e);
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", function (e) {
    calculator.updateSecondOperand(e)
    // const target = getTarget(e);
    // console.log(target);
    // // calculator.updateUI(target);
    // testOperator2 = testOperator;
    // testOperator = "";
    // testOperation = target;
    // console.log(testOperator + " ovo je prvi operator");
    // console.log(testOperator2 + " ovo je drugi operator");
    // console.log(testOperation + " ovo je operacija");
  })
);
