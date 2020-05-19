let currentOperand = '';
let previousOperand = '';
let answer = '';
let currentOperator = '';

let displayText = document.getElementById('displayText');

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b===0) {
        return 'No No No No No No';
    } else {
        return a/b;
    }
}

function displayValue() {
    createNum();
    operate();
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
                    currentOperand = '';
            }
            displayText.textContent = currentOperand;
        });
    });
    const operators = document.querySelectorAll('#operators button');
    operators.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.getAttribute('id') === 'equals') {
                document.getElementById('decimal').classList.remove('inUse');
            } else {
                document.getElementById('decimal').classList.remove('inUse');
                previousOperand = currentOperand;
            }
        });
    });
}

function operate() {
    const operators = document.querySelectorAll('#operators button');
    operators.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.getAttribute('id') === 'equals') {
                getAnswer(currentOperator);
                displayText.textContent = answer;
                currentOperand = answer;
                currentOperator = '';
            } else if (e.target.getAttribute('id') === 'clear') {
                currentOperator = '';
                currentOperand = '';
                previousOperand = '';
                answer = '';
                displayText.textContent = '';
            } else {
                currentOperator = e.target.getAttribute('id');
                currentOperand = '';
            }
        });
    });
}

function getAnswer(operator) {
    previousOperand = Number(previousOperand);
    currentOperand = Number(currentOperand);

    switch (operator) {
        case 'add':
            answer = add(previousOperand,currentOperand);
            break;
        case 'subtract':
            answer = subtract(previousOperand,currentOperand);
            break;
        case 'multiply':
            answer = multiply(previousOperand,currentOperand);
            break;
        case 'divide':
            answer = divide(previousOperand,currentOperand);
            break;
    }
}

displayValue();