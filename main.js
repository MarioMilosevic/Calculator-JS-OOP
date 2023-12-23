"use strict";
import { init } from "./constants";
import { addFn, subtractFn, divideFn, multiplyFn, calculate } from "./helpers";

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
  resultDiv,
  calculations,
  operators,
} = init();

function calculatorCreator() {
  let firstOperand = "";
  let secondOperand = "";
  let operation = "";
  let res = 0;

  const getFirstOperand = () => firstOperand;
  const setFirstOperand = (num) => (firstOperand = num);
  const getSecondOperand = () => secondOperand;
  const setSecondOperand = (num) => (secondOperand = num);

  const getOperation = () => operation;
  const setOperation = (value) => (operation = value);
  const getResult = () => res;

  const updateFirstOperand = (e) => {
    const target = e.target.id;
    firstOperand += target;
  };

  const updateSecondOperand = (e) => {
    secondOperand = firstOperand;
    firstOperand = "";
    operation = e.target.id;
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

function updateUI() {
  const updateUpperUI = (num, o) => {
    calculations.textContent = `${num}${o}`;
  };

  const updateLowerUI = (value) => {
    resultDiv.textContent = value;
  };

  return {
    updateUpperUI,
    updateLowerUI,
  };
}

const calculator = calculatorCreator();
const userInterface = updateUI();

numbers.forEach((num) =>
  num.addEventListener("click", function (e) {
    calculator.updateFirstOperand(e);
    userInterface.updateLowerUI(calculator.getFirstOperand());
    // console.log("first operand prva", calculator.getFirstOperand());
    // console.log("second operand prva", calculator.getSecondOperand());
    // console.log("operacija prva", calculator.getOperation());
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", function (e) {
    // kada nemam OPERACIJU i nemam DRUGI OPERAND
    if (!calculator.getOperation() && !calculator.getSecondOperand()) {
      calculator.updateSecondOperand(e);
      userInterface.updateUpperUI(
        calculator.getSecondOperand(),
        calculator.getOperation()
      );
      userInterface.updateLowerUI("");
      // kada imam svo troje
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
      userInterface.updateLowerUI("");
      userInterface.updateUpperUI(
        calculator.getSecondOperand(),
        calculator.getOperation()
      );
    }
    // console.log("first operand druga", calculator.getFirstOperand());
    // console.log("second operand druga", calculator.getSecondOperand());
    // console.log("operacija druga", calculator.getOperation());
    // console.log("rezultat", calculator.getResult());
  })
);

equals.addEventListener("click", function () {
  const result = calculator.computeResult(
    parseInt(calculator.getSecondOperand()),
    parseInt(calculator.getFirstOperand()),
    calculator.getOperation()
  );
  calculator.setFirstOperand('');
  calculator.setSecondOperand("");
  calculator.setOperation("");
  userInterface.updateLowerUI(result);
  userInterface.updateUpperUI("", "");
  // console.log("first operand rezultat", calculator.getFirstOperand());
  // console.log("second operand rezultat", calculator.getSecondOperand());
  // console.log("operacija rezultat", calculator.getOperation());
});

clear.addEventListener("click", function () {
  calculator.setFirstOperand("");
  calculator.setSecondOperand("");
  calculator.setOperation("");
  userInterface.updateLowerUI(0);
  userInterface.updateUpperUI("", "");
});

del.addEventListener("click", function () {
  const first = calculator.getFirstOperand().slice(0, -1);
  calculator.setFirstOperand(first);
  userInterface.updateLowerUI(first);
});
