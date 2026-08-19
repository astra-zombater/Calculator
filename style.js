// State machine trackers tracking active values
    let currentExpression = ''; //Creates an empty text string to store the math problem as the user types it (e.g., "12+5").
    let clearOnNextInput = false;//A true/false switch. If true, it tells the calculator to wipe the screen clean the next time a user presses a button (usually right after hitting =).


    const displayElement = document.getElementById('display');//Finds the main screen element on your HTML page where the numbers are shown and saves it in a variable.
    const historyElement = document.getElementById('history');//finds the logged history and saves it in a variable 

    function updateDisplay(value) {
        displayElement.innerText = value || '0'; //Updates the main screen with whatever text is passed into value. If value is completely empty, it safely defaults to showing a '0'.
    }

    function updateHistory(value) {
        historyElement.innerText = value;//Updates the smaller history screen with the text passed into value
    }

    function inputDigit(digit) { // whenever user clicks the number 0-9 it gets it and parses it to the other storing variables
        if (clearOnNextInput) {
            currentExpression = '';
            clearOnNextInput = false;
        }
        currentExpression += digit; //whatever number is pressed gets stored as a new instead of empty string 
        updateDisplay(currentExpression);
    }

    function inputOperator(op) {
        if (clearOnNextInput) {
            clearOnNextInput = false;
        }
        
        // Prevent stacking operators rawly
        if (currentExpression === '' && op !== '-') return; // Prevents the user from typing an operator on an empty screen, unless it is a minus sign - (to allow negative numbers).
        
        const lastChar = currentExpression.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            currentExpression = currentExpression.slice(0, -1) + op;
        } else {
            currentExpression += op;
        }
        updateDisplay(currentExpression);
    }

    function inputParenthesis(paren) {
        if (clearOnNextInput) {
            currentExpression = '';
            clearOnNextInput = false;
        }
        currentExpression += paren;
        updateDisplay(currentExpression);
    }

    function inputDecimal(dot) {
        if (clearOnNextInput) {
            currentExpression = '0';
            clearOnNextInput = false;
        }
        // googled this shit, don't understand myself much as well but it solves larger problems by derivation (breaking into smaller problems and after solving computing as a whole.)
        const segments = currentExpression.split(/[\+\-\*\/]/);
        const currentSegment = segments[segments.length - 1];
        
        if (!currentSegment.includes('.')) {
            currentExpression += currentExpression === '' || /[\+\-\*\/]$/.test(currentExpression) ? '0.' : dot;
            updateDisplay(currentExpression);
        }
    }

    function inputPercent() {
        if (currentExpression === '') return;
        try {
            // Evaluates local sequence before running percentage conversion safely
            let solvedValue = eval(currentExpression);// googles it as well




            currentExpression = (parseFloat(solvedValue) / 100).toString();
            updateDisplay(currentExpression);
            clearOnNextInput = true;



            //catch (e) { updateDisplay('Error'); currentExpression = ''; }
            // What it does: If the user typed invalid math (like (5+%)), this catches the crash, prints "Error" on the screen, and resets the memory.

        } catch (e) {
            updateDisplay('Error');
            currentExpression = '';
        }
    }

    function clearAll() {
        currentExpression = '';
        updateDisplay('0');
        updateHistory('');
        clearOnNextInput = false;
    }

    function executeCalculation() {
        if (currentExpression === '') return;
        
        try {
            // Cleans and normalizes values safely
            let trackingExpression = currentExpression;
            let finalResult = eval(trackingExpression);
            
            // Limit float point precision lengths dynamically
            if (!Number.isInteger(finalResult)) {
                finalResult = parseFloat(finalResult.toFixed(8));
            }
            
            updateHistory(trackingExpression + ' =');
            updateDisplay(finalResult.toString());
            currentExpression = finalResult.toString();
            clearOnNextInput = true;

            

            // google said its compulsary idk as hell.
        } catch (error) {
            updateDisplay('Error');
            currentExpression = '';
            clearOnNextInput = true;
        }
    }
