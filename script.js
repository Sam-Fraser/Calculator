let currentOperand = '';
let currentAnswer = '';
const operands = [];
const operations = [];

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

function displayNum() {
    let displayText = document.getElementById('displayText');

    const nums = document.querySelectorAll('#numbers button');
    console.table(nums);
    nums.forEach((button) => {
        button.addEventListener('click', (e) => {
            switch (button.getAttribute('id')) {
                case 'one':
                    currentOperand += '1';
                    break;
                case 'two':
                    currentOperand += '2';
                    break;
                case 'three':
                    currentOperand += '3';
                    break;
                case 'four':
                    currentOperand += '4';
                    break;
                case 'five':
                    currentOperand += '5';
                    break;
                case 'six':
                    currentOperand += '6';
                    break;
                case 'seven':
                    currentOperand += '7';
                    break;
                case 'eight':
                    currentOperand += '8';
                    break;        
                case 'nine':
                    currentOperand += '9';
                    break;
                case 'zero':
                    currentOperand += '0';
                    break;
                default:
                    currentOperand = answer;
            }
            displayText.textContent = currentOperand;
        });
    });

}

function getOperand() {

}

displayNum();