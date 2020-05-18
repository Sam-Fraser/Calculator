let currentOperand = '';
let currentAnswer = '';
let currentOperator = '';
const operands = [];
const operations = [];

let displayText = document.getElementById('displayText');

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

function displayValue() {
    createNum();
    createOperation();
}

function operate() {
    
    const operators = document.querySelectorAll('#operators button')

}

function createNum() {
    const nums = document.querySelectorAll('#numbers button');
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
                case 'decimal':
                    if(e.target.getAttribute('class') === 'inUse') {
                        break;
                    } else {
                        currentOperand += '.';
                        e.target.classList.add('inUse');
                        break;
                    }
                default:
                    currentOperand = currentAnswer;
            }
            displayText.textContent = currentOperand;
        });
    });
    const operators = document.querySelectorAll('#operators button');
    operators.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('id') !== 'equals') {
                operands.push(currentOperand);
                document.getElementById('decimal').classList.remove('inUse');
                currentOperand = '';
                console.table(operands);
            } else {
                currentOperand = '';
            }
        });
    });

}

function createOperation() {
    const operators = document.querySelectorAll('#operators button');
    operators.forEach((button) => {
        button.addEventListener('click', (e) => {
            switch (button.getAttribute('id')) {
                case 'add':
                    currentOperator = '+';
                    break;
                case 'subtract':
                    currentOperator = '-';
                    break;
                case 'multiply':
                    currentOperator = 'x';
                    break;
                case 'divide':
                    currentOperator = '/';
                    break;
                default:
                    currentOperator = '';
            }

            displayText.textContent = currentOperator;
        });
    });
}

displayValue();