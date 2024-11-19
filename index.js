//creating a calculator

//variables
let firstNum;
let operator;
let secondNum;

//store the clicked variable
let clickedButton = [];
 
//captures button data and render to screen

$(".button").click((e) => {
 const buttonText = $(e.target).text();
    // Check if the clicked button is "AC", if yes, ignore it
    if (buttonText !== "AC") {
        clickedButton.push(buttonText); // Push the button's text to the array
    }

   $(".screen").html(clickedButton);

   if (buttonText == "AC") {
    clearScreen();
   }
 
 }); 
    
//clear screen function
function clearScreen() {
     //clear screen
         clickedButton.length = 0; //clear array
         $(".screen").html(''); //clear display

};    

//basic operations


//create the operate button '='
function operate(num1, operator, num2) {
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




