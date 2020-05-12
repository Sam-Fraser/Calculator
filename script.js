let firstOperand = prompt("First number", 0);
let secondOperand = prompt("Second number", 0);

function add(a,b) {
    console.log(a+b);
}

function subtract(a,b) {
    console.log(a-b);
}

function multiply(a,b) {
    console.log(a*b);
}

function divide(a,b) {
    console.log(a/b);
}

function operate(operation) {

    switch (operation) {
        case 'add':
            add(firstOperand,secondOperand);
            break;
        case 'subtract':
            subtract(firstOperand,secondOperand);
            break;
        case 'multiply':
            multiply(firstOperand,secondOperand);
            break;
        case 'divide':
            divide(firstOperand,secondOperand);
            break;
        default:
            console.log(secondOperand);
    }

}