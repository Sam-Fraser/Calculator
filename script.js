let operator
let firstNum = '';
let secondNum = '';

let displayText = document.getElementById('displayText');

const nums = document.querySelectorAll('#numbers button');
const operators = document.querySelectorAll('#operators button');
const clear = document.getElementById('clear');

nums.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (operator == null) {
            if (!(e.target.getAttribute('class') === 'inUse')) {
                firstNum += button.textContent;
                displayText.textContent = firstNum;
            }
        } else {
            if (!(e.target.getAttribute('class') === 'inUse')) {
                secondNum += button.textContent;
                displayText.textContent = secondNum;
            }
        }

        if (button.getAttribute('id') === 'decimal') {
            e.target.classList.add('inUse');
        }
    });
});

operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        for (let i=0; i<operators.length; i++) {
            if (operators[i].getAttribute('class') === 'active') {
                operators[i].classList.remove('active');
            } else {
                continue;
            }
        }
        e.target.classList.add('active');
        if (operator == null || operator === 'equals') {
            operator = button.getAttribute('id');
            document.getElementById('decimal').classList.remove('inUse');
        } else if (button.getAttribute('id') === 'clear') {
            document.getElementById('decimal').classList.remove('inUse');
        } else {
            operate(operator, firstNum, secondNum);
            operator = button.getAttribute('id');
            document.getElementById('decimal').classList.remove('inUse');
        }
    });
});

function operate(op, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(op) {
        case 'add':
            firstNum = add(num1,num2);
            secondNum = '';
            break;
        case 'subtract':
            firstNum = subtract(num1,num2);
            secondNum = '';
            break;
        case 'multiply':
            firstNum = multiply(num1,num2);
            secondNum = '';
            break;
        case 'divide':
            firstNum = divide(num1,num2);
            secondNum = '';
            break;
        default:
            break;
    }
    
    displayText.textContent = firstNum;
}

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

clear.addEventListener('click', (e) => {
    operator = undefined;
    firstNum = '';
    secondNum = '';
    displayText.textContent = '';
});















/*let currentOperand = '';
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
                getAnswer(currentOperator);
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
*/