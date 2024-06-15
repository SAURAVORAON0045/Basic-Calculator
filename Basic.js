let display = document.getElementById('display');
let currentOperation = null;
let previousValue = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        display.value = display.value === '0' ? number : display.value + number;
    }
}

function appendDecimal() {
    if (shouldResetDisplay) {
        display.value = '0.';
        shouldResetDisplay = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    previousValue = null;
    shouldResetDisplay = false;
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    previousValue = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    let currentValue = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(previousValue) + parseFloat(currentValue);
            break;
        case '-':
            result = parseFloat(previousValue) - parseFloat(currentValue);
            break;
        case '*':
            result = parseFloat(previousValue) * parseFloat(currentValue);
            break;
        case '/':
            result = parseFloat(previousValue) / parseFloat(currentValue);
            break;
        default:
            return;
    }
    display.value = result;
    currentOperation = null;
    shouldResetDisplay = true;
}
