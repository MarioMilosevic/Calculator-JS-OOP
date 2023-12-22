"use strict";

export const getTarget = (e) => {
  const target = e.target.id;
  return target;
};

export const addFn = (a, b) => a + b;
export const subtractFn = (a, b) => a - b;
export const multiplyFn = (a, b) => a * b;
export const divideFn = (a, b) => a / b;

export const calculate = (a, b, operand) => `${a} ${operand} ${b}`;
