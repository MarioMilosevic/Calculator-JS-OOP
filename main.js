"use strict";
import { init } from "./constants";
import { showElement } from "./helpers";
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
  elements,
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
  let firstOperand = '';
  let secondOperand = "";

  const updateLowerUI = (number) => {
    firstOperand += number;
    result.textContent = firstOperand;
    console.log(firstOperand);
  };

  const updateUpperUI = () => {
   secondOperand = eval(firstOperand)
   calculations.textContent = secondOperand
   firstOperand = ''
   result.textContent = ''
 
  }

  return {
    firstOperand,
    secondOperand,
    updateLowerUI,
    updateUpperUI
  };
}

const calculator = calculatorCreator();

elements.forEach((el) => {
  el.addEventListener("click", function (e) {
    // uzme event vrijednost, i updateUI sa targetom
    showElement(e, calculator);
  });
});


equals.addEventListener('click', function(){
  console.log('radi');
  calculator.updateUpperUI()
})
