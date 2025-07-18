let op1 = 0;
let operator = "";
let op2 = 0;
let displayValue = 0;
let justCalculated = false;

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function operate(operator, n1, n2) {
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "*") {
    return multiply(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "/") {
    return divide(n1, n2);
  }
}

let digitBtns = document.querySelectorAll(".digit");
let operandBtns = document.querySelectorAll(".operand");
let clearBtn = document.querySelector(".clear");
let display = document.querySelector(".p-display");
let equalBtn = document.querySelector(".equal");

operandBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    display.innerHTML = null;

    operator = btn.textContent;

    console.log(operator);
  })
);

digitBtns.forEach((btn) =>
  btn.addEventListener("click", () => updateDisplay(btn))
);

clearBtn.addEventListener("click", () => {
  display.innerHTML = null;
  op1 = 0;
  op2 = 0;
  operator = "";
  displayValue = 0;
});

function updateDisplay(btn) {
  if (operator === "") {
    if (justCalculated === true && operator === "") {
      op1 = btn.textContent;
      justCalculated = false;
    } else if (op1 === 0) {
      op1 = btn.textContent;
    } else {
      op1 += btn.textContent;
    }
    display.innerHTML = op1;
  } else if (operator !== "") {
    if (op2 === 0) {
      op2 = btn.textContent;
    } else {
      op2 += btn.textContent;
    }
    display.innerHTML = op2;
  }
}

equalBtn.addEventListener("click", () => {
  if (operator === "/" && op2 === "0") {
    alert("cant divdie by zero");
    op2 = 0;
  } else {
    displayValue = operate(operator, parseInt(op1), parseInt(op2));
    console.log(displayValue);
    display.innerHTML = displayValue;
    op1 = displayValue;
    op2 = 0;
    operator = "";
    justCalculated = true;
  }
});
