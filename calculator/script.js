let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentExpression !== '') {
        currentExpression += operator;
        updateDisplay();
    }
}

function appendDecimal(decimal) {
    if (!currentExpression.includes('.') && currentExpression !== '') {
        currentExpression += decimal;
        updateDisplay();
    }
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentExpression;
}

