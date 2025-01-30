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
let operatorExists = false;


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
function reset() {
    screen.innerHTML = "";
    operator = null;
    numberOne = null;
    numberTwo = null;
    screenDigits = null;
}

clearButton.addEventListener("click", reset);

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

        if (operatorExists) {
            numberTwo = screenDigits;
            let answer = operate(numberOne, operation, numberTwo);
            screen.textContent = answer;
            numberOne = answer;
        } else {
            numberOne = screenDigits;
        }


        if (operator === plus) {
            operation = "+";
            clearDisplay = true;
            operatorExists = true;
        } else if (operator === minus) {
            operation = "-";
            clearDisplay = true;
            operatorExists = true;
        } else if (operator === times) {
            operation = "*";
            clearDisplay = true;
            operatorExists = true;
        } else if (operator === obelus) {
            operation = "/";
            clearDisplay = true;
            operatorExists = true;
        }
    });
});

// Second half of calculation

function calculate() {

    if (numberOne !== null && operation !== null) {

        numberTwo = parseFloat(screenDigits);
        numberOne = parseFloat(numberOne);

        let answer = operate(numberOne, operation, numberTwo);
        answer = parseFloat(answer.toFixed(4));

        if (operation === "/" && numberTwo === 0) {
            screen.textContent = "M8";
        } else {
            screen.textContent = answer;
        }

        numberOne = answer;
        screenDigits = answer;
    } else {
        reset();
    }

    clearDisplay = true;
    operatorExists = false;
    test();
};

equals.addEventListener("click", calculate);



function test() {
    console.log(`Number one is ${numberOne}`)
    console.log(`Operator is ${operation}`)
    console.log(`Number two is ${numberTwo}`)
    console.log(`Screen Digits is ${screenDigits}`)
    console.log(`Operator Exists is ${operatorExists}`)
}
