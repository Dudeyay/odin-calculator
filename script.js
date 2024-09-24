

function displayValue(e) {
    if (e.target.tagName === 'BUTTON') {
        if (clearDisplay) {
            display.innerHTML = e.target.innerHTML;
            clearDisplay = false;
        } else if (e.target.innerHTML != '.' || display.innerHTML.includes(".") == false) {
            if (display.innerHTML.length < 10) {
                display.innerHTML += e.target.innerHTML;
            }

        }
    }
}

function handleOperations(e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.className == "misc") {
            switch (e.target.innerHTML) {
                case "AC":
                    display.innerHTML = "0";
                    clearDisplay = true;
                    expression.firstOperand = undefined;
                    expression.secondOperand = undefined;
                    expression.operator = "";
                    break;
                case "+/-":
                    display.innerHTML = parseFloat(display.innerHTML) * -1;
                    break;
                case "%":
                    display.innerHTML = parseFloat(display.innerHTML) / 100;
                    break;
            }
        } else {
            let result;
            if (expression.firstOperand == undefined) {
                expression.firstOperand = parseFloat(display.innerHTML);
                expression.operator = e.target.innerHTML;
                clearDisplay = true;
            } else {
                expression.secondOperand = parseFloat(display.innerHTML);
                switch (expression.operator) {
                    case "+":
                        result = expression.firstOperand + expression.secondOperand;
                        break;
                    case "-":
                        result = expression.firstOperand - expression.secondOperand;
                        break;
                    case "*":
                        result = expression.firstOperand * expression.secondOperand;
                        break;
                    case "/":
                        result = expression.firstOperand / expression.secondOperand;
                        break;
                    case "=":
                        result = expression.firstOperand;
                        break;

                }

                expression.secondOperand = undefined;
                display.innerHTML = result;
                expression.firstOperand = undefined;
                expression.operator = "";
                if (e.target.innerHTML != "=") {
                    expression.operator = e.target.innerHTML;
                    expression.firstOperand = result;
                }
                clearDisplay = true;
            }
        }
    }



}

function checkOverflow() {
    if (display.innerHTML.length > 11) {
        display.innerHTML = parseFloat(display.innerHTML).toExponential(4);
    }
}

const display = document.querySelector("div.display");
const digits = document.querySelector(".digits");
const operators = document.querySelector(".operators");
let clearDisplay = true;

let expression = {
    firstOperand: undefined,
    operator: "",
    secondOperand: undefined
};

digits.addEventListener("click", function (e) {
    displayValue(e);
});

operators.addEventListener("click", function (e) {
    handleOperations(e);
    checkOverflow();
});





