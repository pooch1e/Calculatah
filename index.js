let clickedButton = [];
let secondNumberArray = [];
let firstNum = "";
let operator = "";
let secondNum = "";
let isSecondNumber = false;

// Handle button clicks
$(".button").click((e) => {
    const buttonText = $(e.target).text();

    // Handle "AC" button to reset everything
    if (buttonText === "AC") {
        clearScreen();
        return;
    }

    // Handle special operators (% and +/-)
    if (['%', '+/-'].includes(buttonText)) {
        firstNum = applySpecialOperator(buttonText, firstNum);
        $(".screen").html(firstNum);
        return; // Exit to avoid further processing
    }

    // Handle main operators (+, -, *, /)
    if (['+', '-', '*', '/'].includes(buttonText)) {
        if (isSecondNumber) {
            // Calculate intermediate result
            calculateIntermediateResult();
        }
        operator = buttonText;
        isSecondNumber = true;
        $(".screen").html(firstNum + operator);
        return;
    }

    // Handle numbers
    if (isSecondNumber) {
        secondNumberArray.push(buttonText);
        secondNum = secondNumberArray.join("");
        secondNum.length = 8; //limit array to 8 numbers
        $(".screen").html(firstNum + operator + secondNum);
    } else {
        clickedButton.push(buttonText);
        firstNum = clickedButton.join("");
        firstNum.length = 8; //limit first num to 8 
        $(".screen").html(firstNum);
    }
});

// Handle "=" button to compute final result
$("#equals").click(() => {
    if (operator && secondNum) {
        calculateIntermediateResult();
        $(".screen").html(firstNum); // Display final result
        resetCalculation();
    }
});

// Helper Functions
function clearScreen() {
    clickedButton = [];
    secondNumberArray = [];
    firstNum = "";
    operator = "";
    secondNum = "";
    isSecondNumber = false;
    $(".screen").html("");
}

function applySpecialOperator(op, num) {
    const number = parseFloat(num) || 0;
    if (op === '%') {
        return (number / 100).toString();
    }
    if (op === '+/-') {
        return (-number).toString();
    }
    return num;
}

function calculateIntermediateResult() {
    const num1 = parseFloat(firstNum) || 0;
    const num2 = parseFloat(secondNum) || 0;
    firstNum = performOperation(num1, operator, num2).toString();
    operator = ""; // Reset operator after calculation
    secondNumberArray = [];
    secondNum = "";
    isSecondNumber = false;
}

function performOperation(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error";
        default:
            return num1; // Default to num1 if no valid operator
    }
}

function resetCalculation() {
    clickedButton = [firstNum];
    secondNumberArray = [];
    operator = "";
    secondNum = "";
    isSecondNumber = false;
}
