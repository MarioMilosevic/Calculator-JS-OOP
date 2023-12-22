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

  const getFirstOperand = () => firstOperand;
  const setFirstOperand = (value) => (firstOperand = value);
  const getSecondOperand = () => secondOperand;

  const getOperation = () => operation;
  const setOperation = (value) => (operation = value);
  const getResult = () => res;

  const updateFirstOperand = (e) => {
    const target = getTarget(e);
    firstOperand += target;
  };

  const updateSecondOperand = (e) => {
    secondOperand = firstOperand;
    firstOperand = "";
    operation = e.target.textContent;
  };

  const setSecondOperand = (num) => {
    secondOperand = num;
  };

  const computeResult = (a, b, o) => {
    if (o === "+") {
      return addFn(a, b);
    } else if (o === "-") {
      return subtractFn(a, b);
    } else if (o === "*") {
      return multiplyFn(a, b);
    } else if (o === "/") {
      return divideFn(a, b);
    }
  };

  return {
    getFirstOperand,
    setFirstOperand,
    getSecondOperand,
    getOperation,
    getResult,
    setOperation,
    setSecondOperand,
    computeResult,
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
    if (!calculator.getOperation() && !calculator.getSecondOperand()) {
      calculator.updateSecondOperand(e);
    } else if (
      calculator.getFirstOperand() &&
      calculator.getOperation() &&
      calculator.getSecondOperand()
    ) {
      const result = calculator.computeResult(
        parseInt(calculator.getSecondOperand()),
        parseInt(calculator.getFirstOperand()),
        calculator.getOperation()
      );
      calculator.setFirstOperand("");
      calculator.setOperation(e.target.id);
      calculator.setSecondOperand(result);
      console.log("aaaaaaaaaaaaa");
    }

    console.log("first operand", calculator.getFirstOperand());
    console.log("second operand", calculator.getSecondOperand());
    console.log("operacija", calculator.getOperation());
    // console.log("rezultat", calculator.getResult());
  })
);
