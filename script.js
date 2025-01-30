// DOM Elements

const buttons = document.querySelectorAll("button");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear");
const backButton = document.querySelector(".delete");

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


// Flag for resetting screen and checking operator buttons

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

// Function for choosing operator and assigning values to number variables

function chooseOperator(selectedOperator) {
    if (operatorExists && clearDisplay) {
        operation = selectedOperator;
        return;
    }

    if (operatorExists) {
        numberTwo = screenDigits;
        let answer = operate(numberOne, operation, numberTwo);
        screen.textContent = answer;
        numberOne = answer;
    } else {
        numberOne = parseFloat(screenDigits);
    }

    operation = selectedOperator;
    clearDisplay = true;
    operatorExists = true;
}

// Choose operator on click

operators.forEach((operator) => {
    operator.addEventListener("click", () => {

        if (operator === plus) {
            chooseOperator("+");
        } else if (operator === minus) {
            chooseOperator("-");
        } else if (operator === times) {
            chooseOperator("*");
        } else if (operator === obelus) {
            chooseOperator("/");
        }
    });
});

// Function for calculating the sum with the variables

function calculate() {

    if (numberOne !== null && operation !== null) {

        numberTwo = parseFloat(screenDigits);
        numberOne = parseFloat(numberOne);

        let answer = operate(numberOne, operation, numberTwo);
        answer = parseFloat(answer.toFixed(4));

        if (operation === "/" && numberTwo === 0) {
            screen.textContent = "M8";
        } else if (answer < 999999999999) {
            screen.textContent = answer;
        } else {
            screen.textContent = "ERROR";
        }

        numberOne = answer;
        screenDigits = answer;
        
    } else {
        reset();
    }

    clearDisplay = true;
    operatorExists = false;
};

equals.addEventListener("click", calculate);

