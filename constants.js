"use strict";

export function init() {
  // Numbers
  const number1 = document.querySelector(".number1");
  const number2 = document.querySelector(".number2");
  const number3 = document.querySelector(".number3");
  const number4 = document.querySelector(".number4");
  const number5 = document.querySelector(".number5");
  const number6 = document.querySelector(".number6");
  const number7 = document.querySelector(".number7");
  const number8 = document.querySelector(".number8");
  const number9 = document.querySelector(".number9");
  const number0 = document.querySelector(".number0");
  const numbers = [
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
  ];
  // Operators
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const multiply = document.querySelector(".multiply");
  const divide = document.querySelector(".divide");
  const operators = [plus, minus, multiply, divide]
  // Other
  const dot = document.querySelector(".dot");
  const equals = document.querySelector(".equals");
  const clear = document.querySelector(".clear");
  const del = document.querySelector(".delete");
  const resultDiv = document.querySelector(".resultDiv");
  const calculations = document.querySelector(".calculations");
 
  return {
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
    dot,
    equals,
    clear,
    del,
    resultDiv,
    calculations,
    numbers,
    operators,
  };
}
