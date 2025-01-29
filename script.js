// DOM Variables

const buttons = document.querySelectorAll("button");
const digits = document.querySelectorAll(".digit");
const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear");


// Addition function 

function add(a, b) {
    return a + b;
}

// Subtraction function 


function subtract(a, b) {
    return a - b;
}

// Multiplication function 

function multiply(a, b) {
    return a * b;
}

// Division function

function divide(a, b) {
    return a / b;
}

// Calculator operators
let numberOne = null;
let operator = null;
let numberTwo = null;

// Operate function 

const operate = (numberOne, operator, numberTwo) => {
    if (operator === "+") {
        return add(numberOne, numberTwo);
    } else if (operator === "-") {
        return subtract(numberOne, numberTwo);
    } else if (operator === "*") {
        return multiply(numberOne, numberTwo);
    } else if (operator === "/") {
        return divide(numberOne, numberTwo);
    };
};

// Screen population function

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        screen.textContent += digit.innerHTML;
    });
});        

// Clear button function

clearButton.addEventListener("click", () => {
    screen.innerHTML = "";
})

// Button animation 

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 100);
  });
});

