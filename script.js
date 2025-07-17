function add(n1, n2) {}

function subtract(n1, n2) {}

function divide(n1, n2) {}

function multiply(n1, n2) {}

let op1 = 0;
let operator = 0;
let op2 = 0;

function operate(operator, n1, n2) {
  if ((operator = "+")) {
    add(n1, n2);
  } else if ((operator = "*")) {
    multiply(n1, n2);
  } else if ((operator = "-")) {
    subtract(n1, n2);
  } else if ((operator = "/")) {
    divide(n1, n2);
  }
}
