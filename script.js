// Global Variables

const buttons = document.querySelectorAll("button");
const digits = document.querySelectorAll(".digit");
const screen = document.querySelector(".screen");
const clearButton = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
let screenDigits = null;

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

// Calculator function

    // store first value from screenDigits on operator click
    // store chosen operator in a variable
    // set screenDigits variable to zero
    // clear display when new digits entered
    // store second value from screen digits when equals is pressed
    // call operate function when equals is pressed
    // assign operate return value to screenDigits

// Screen population function

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (screen.textContent.length < 12 && (digit.innerHTML !== "." || !screen.textContent.includes("."))) {
            screenDigits = screen.textContent += digit.innerHTML;
        }
    });
});

// Clear button function

function clearDisplay () {
        screen.innerHTML = "";
};

clearButton.addEventListener("click", () => {
    screen.innerHTML = "";
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

