let firstOperand = 0;
let secondOperand = 0;

function add(a,b) {
    a = Number(a);
    b = Number(b);
    console.log(a+b);
}

function subtract(a,b) {
    console.log(a-b);
}

function multiply(a,b) {
    console.log(a*b);
}

function divide(a,b) {
    if (b===0) {
        console.log('No No No No No No');
    }
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