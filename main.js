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

class CalculatorCreator {
  constructor() {
    this.firstOperand = "";
    this.secondOperand = "";
    this.operation = "";
    this.res = 0;
  }

  getFirstOperand = function () {
    return this.firstOperand;
  };

  getSecondOperand = function () {
    return this.secondOperand;
  };

  setFirstOperand = function (value) {
    this.firstOperand = value;
  };
  setSecondOperand = function (value) {
    this.secondOperand = value;
  };

  getResult = function () {
    return this.res;
  };

  setResult = function (value) {
    this.res = value;
  };

  setOperation = function (value) {
    this.operation = value;
  };
  getOperation = function () {
    return this.operation;
  };

  computeResult = function (a, b, o) {
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

  updateFirstOperand = function (e) {
    const target = e.target.id;
    this.firstOperand += target;
  };

  updateSecondOperand = function (e) {
    this.secondOperand = this.firstOperand;
    this.firstOperand = "";
    this.operation = e.target.id;
  };
}

class UpdateUI {
  constructor() {}
  updateUpperUI = function (num, o) {
    calculations.textContent = `${num}${o}`;
  };

  updateLowerUI = function (value) {
    resultDiv.textContent = value;
  };
}

const calculator = new CalculatorCreator();
const userInterface = new UpdateUI();

numbers.forEach((num) =>
  num.addEventListener("click", function (e) {
    calculator.updateFirstOperand(e);
    userInterface.updateLowerUI(calculator.getFirstOperand());
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", function (e) {
    if (!calculator.getOperation() && !calculator.getSecondOperand()) {
      calculator.updateSecondOperand(e);
      userInterface.updateUpperUI(
        calculator.getSecondOperand(),
        calculator.getOperation()
      );
      userInterface.updateLowerUI("");
    } else if (
      calculator.getFirstOperand() &&
      calculator.getOperation() &&
      calculator.getSecondOperand()
    ) {
      const result = calculator.computeResult(
        parseFloat(calculator.getSecondOperand()),
        parseFloat(calculator.getFirstOperand()),
        calculator.getOperation()
      );
      calculator.setFirstOperand("");
      calculator.setOperation(e.target.id);
      calculator.setSecondOperand(result.toFixed(1));
      userInterface.updateLowerUI("");
      userInterface.updateUpperUI(
        calculator.getSecondOperand(),
        calculator.getOperation()
      );
    }
  })
);

equals.addEventListener("click", function () {
  calculator.setResult(
    calculator.computeResult(
      parseFloat(calculator.getSecondOperand()),
      parseFloat(calculator.getFirstOperand()),
      calculator.getOperation()
    )
  );

  calculator.setFirstOperand("");
  calculator.setSecondOperand("");
  calculator.setOperation("");
  userInterface.updateLowerUI(calculator.getResult());
  userInterface.updateUpperUI("", "");
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

dot.addEventListener("click", function () {
  if (calculator.getFirstOperand() === "") {
    calculator.setFirstOperand("0.");
    userInterface.updateLowerUI(calculator.getFirstOperand());
  } else if (
    typeof calculator.getFirstOperand() === "string" &&
    calculator.getFirstOperand().length >= 1 &&
    !calculator.getFirstOperand().includes(".")
  ) {
    calculator.setFirstOperand(calculator.getFirstOperand() + ".");
    userInterface.updateLowerUI(calculator.getFirstOperand());
  }
});
