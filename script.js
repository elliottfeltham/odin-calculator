// DOM Elements

const buttons = document.querySelectorAll("button");
const digits = document.querySelectorAll(".digit");
const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const times = document.querySelector(".multiply");
const obelus = document.querySelector(".divide");
const equals = document.querySelector(".equal");


// Global Variables

let numberOne = null;
let numberTwo = null;
let operation = null;
let screenDigits = null;


// Flag for resetting screen

let clearDisplay = false;


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

// Operate function

const operate = (numberOne, operation, numberTwo) => {
    if (operation === "+") {
        return add(numberOne, numberTwo);
    } else if (operation === "-") {
        return subtract(numberOne, numberTwo);
    } else if (operation === "*") {
        return multiply(numberOne, numberTwo);
    } else if (operation === "/") {
        return divide(numberOne, numberTwo);
    }
};


// Screen population function

digits.forEach((digit) => {
    digit.addEventListener("click", () => {

        if (clearDisplay) {
            screen.textContent = "";
            clearDisplay = false;
        }

        if (
            screen.textContent.length < 12 &&
            (digit.innerHTML !== "." || !screen.textContent.includes("."))
        ) {
            screenDigits = screen.textContent += digit.innerHTML;
        }
    });
});


// Clear button function

clearButton.addEventListener("click", () => {
    screen.innerHTML = "";
    operator = null;
    numberOne = null;
    numberTwo = null;
});

// Button animation

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.9)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 100);
    });
});


// First half of calculation

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        numberOne = screenDigits;

        if (operator === plus) {
            operation = "+";
            clearDisplay = true;
        } else if (operator === minus) {
            operation = "-";
            clearDisplay = true;
        } else if (operator === times) {
            operation = "*";
            clearDisplay = true;
        } else if (operator === obelus) {
            operation = "/";
            clearDisplay = true;
        }
    });
});

// Second half of calculation

equals.addEventListener("click", () => {
    numberTwo = screenDigits;
    let answer = operate(numberOne, operation, numberTwo);
    console.log(answer);
    screen.textContent = answer;
    clearDisplay = true;
    test();
})

function test() {
    console.log(`Number one is ${numberOne}`)
    console.log(`Operator is ${operation}`)
    console.log(`Number two is ${numberTwo}`)
    console.log(`Screen Digits is ${screenDigits}`)
}
