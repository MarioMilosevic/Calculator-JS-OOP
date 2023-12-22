"use strict";
import { init } from "./constants";
import {
  getTarget,
  addFn,
  subtractFn,
  divideFn,
  multiplyFn,
  calculate,
} from "./helpers";

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
    console.log("first operand prva", firstOperand);
  };

  const updateSecondOperand = (e) => {
    const target = getTarget(e);
    operation = target;
    if (!secondOperand) {
      secondOperand = firstOperand;
      console.log("jeste");
    } else {
      computeResult(parseInt(secondOperand), parseInt(firstOperand), operation);
    }
    firstOperand = "";
    console.log("first operand druga", firstOperand);
    console.log("second operand druga", secondOperand);
    console.log("operacija", operation);
  };

  const computeResult = (a, b, o) => {
    if (o === "+") {
      res = addFn(a, b);
      console.log(res);
    } else if (o === "-") {
      res = subtractFn(a, b);
      console.log(res);
    } else if (o === "*") {
      res = multiplyFn(a, b);
      console.log(res);
    } else if (o === "/") {
      res = divideFn(a, b);
      console.log(res);
    }
  };

  return {
    firstOperand,
    secondOperand,
    operation,
    res,
    updateFirstOperand,
    updateSecondOperand,
  };
}

const calculator = calculatorCreator();

numbers.forEach((num) =>
  num.addEventListener("click", function (e) {
    calculator.updateFirstOperand(e);
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", function (e) {
    calculator.updateSecondOperand(e);
  })
);
