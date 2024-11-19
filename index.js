//creating a calculator



//store the clicked variable
let clickedButton = [];
let secondNumberArray = [];

//variables
let firstNum = "";
let operator = "";
let secondNum = "";
let isSecondNumber = false; //check for an operator and move button presses to second array
let answer = 0;
 
//captures button data and render to screen

$(".button").click((e) => {
    const buttonText = $(e.target).text();

    // Handle "AC" button to reset everything
    if (buttonText === "AC") {
        clearScreen();
        return;
    }

    // find an operator
    if (['+', '-', '*', '/'].includes(buttonText) && !isSecondNumber) {
        operator = buttonText;         // Save operator
        isSecondNumber = true;         // Switch to capturing the second number
        $(".screen").html(clickedButton.join("") + operator); // Display operator
        console.log(operator);
        return; // Exit early to avoid duplicating this button press
    }

    //second number logic
    if (isSecondNumber) {
        secondNumberArray.push(buttonText); //pushing numbers to second array
        secondNum = secondNumberArray.join(""); 
        $(".screen").html(clickedButton.join("") + operator + secondNum); 
        console.log("Second number", secondNum);
    } else {
        
        clickedButton.push(buttonText);
        firstNum = clickedButton.join(""); 
        $(".screen").html(firstNum); 
        console.log("First NUmber", firstNum);
    }

    //equals logic
    if (operator === clickedButton.includes("=")) {
        return answer = equals(firstNum, operator, secondNum);
    }
    //display returned number
    $(".screen").html(answer);
});

// Clear the screen and reset everything
function clearScreen() {
    clickedButton = [];
    secondNumberArray = [];
    firstNum = "";
    operator = "";
    secondNum = "";
    isSecondNumber = false;
    $(".screen").html("");
    console.log("Cleared all inputs");
}

//basic operations


//create the operate button '='
function equals(num1, operator, num2) {
    switch (operator) {
        case '+':
            return addNum(num1, num2); // Pass arguments
        case '-':
            return subtractNum(num1, num2);
        case '/':
            return divideNum(num1, num2);
        case '*':
            return multiplyNum(num1, num2);
        default:
            return 'Invalid operator';
    }

    // Inner functions
    function addNum(a, b) {
        return a + b;
    }

    function subtractNum(a, b) {
        return a - b;
    }

    function divideNum(a, b) {
        return a / b;
    }

    function multiplyNum(a, b) {
        return a * b;
    }


}

//reset data
function reset() {
    clickedButton = [];
    secondNumberArray = [];
    operator;
}
//functionality for = button
$("#equal").click()



