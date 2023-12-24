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
  this.firstOperand = "";
  this.secondOperand = "";
  this.operation = "";
  this.res = 0;
}

calculatorCreator.prototype.getFirstOperand = function () {
  return this.firstOperand;
};

calculatorCreator.prototype.getSecondOperand = function () {
  return this.secondOperand;
};

calculatorCreator.prototype.setFirstOperand = function (value) {
  this.firstOperand = value;
};
calculatorCreator.prototype.setSecondOperand = function (value) {
  this.secondOperand = value;
};

calculatorCreator.prototype.getResult = function () {
  return this.res;
};

calculatorCreator.prototype.setResult = function (value) {
  this.res = value;
};

calculatorCreator.prototype.setOperation = function (value) {
  this.operation = value;
};
calculatorCreator.prototype.getOperation = function () {
  return this.operation;
};

calculatorCreator.prototype.computeResult = function (a, b, o) {
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

calculatorCreator.prototype.updateFirstOperand = function (e) {
  const target = e.target.id;
  this.firstOperand += target;
};

calculatorCreator.prototype.updateSecondOperand = function (e) {
  this.secondOperand = this.firstOperand;
  this.firstOperand = "";
  this.operation = e.target.id;
};




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

const calculator = new calculatorCreator();
console.log(calculator);
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
    // console.log("first operand druga", calculator.getFirstOperand());
    // console.log("second operand druga", calculator.getSecondOperand());
    // console.log("operacija druga", calculator.getOperation());
    // console.log("rezultat", calculator.getResult());
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
  // const result = calculator.computeResult(
  //   parseInt(calculator.getSecondOperand()),
  //   parseInt(calculator.getFirstOperand()),
  //   calculator.getOperation()
  // );
  calculator.setFirstOperand("");
  calculator.setSecondOperand("");
  calculator.setOperation("");
  userInterface.updateLowerUI(calculator.getResult());
  userInterface.updateUpperUI("", "");
  // console.log("first operand rezultat", calculator.getFirstOperand());
  // console.log("second operand rezultat", calculator.getSecondOperand());
  // console.log("operacija rezultat", calculator.getOperation());
  console.log(calculator.getResult());
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
  console.log(calculator.getFirstOperand());
  console.log(calculator.getSecondOperand());
});
