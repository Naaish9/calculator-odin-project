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

let digitBtns = document.querySelectorAll(".digit");
let clearBtn = document.querySelector(".clear");
let display = document.querySelector(".p-display");

function updateDisplay(btn) {
  if (op1 === 0) {
    op1 = btn.textContent;
  } else {
    op1 += btn.textContent;
  }
  display.innerHTML = op1;
}

digitBtns.forEach((btn) =>
  btn.addEventListener("click", () => updateDisplay(btn))
);

clearBtn.addEventListener("click", () => {
  display.innerHTML = null;
  op1 = 0;
});
