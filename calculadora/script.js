const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");
const mathOperators = ["*", "-", "+", "/"];

let firstNumber;
let secondNumber;
let operator;

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const className = e.target.className
        const value = e.target.innerText

        // numbers
        if (className === "number") {
            if (display.innerText === "0") {
                display.innerText = value
                return
            }
            if (firstNumber) {
                if (secondNumber) {
                    secondNumber += value
                }
                else {
                    secondNumber = value
                }
            }
            display.innerText += value
        }

        // clear one
        if (value === "C") {
            clear()
        }

        // clear all
        if (value === "CE") {
            clearAll()
        }

        // decimal
        if (value === ".") {
            if (!firstNumber) {
                if (display.innerText.includes(".")) {
                    return
                }
            } 

            if (secondNumber) {
                if (secondNumber.includes(".")){
                    return
                }
                secondNumber += value
                
            }
            display.innerText += value
        }

        // define operation
        if (mathOperators.includes(value)) {

            if (display.innerText === "0") {
                return
            }

            if (operator) {
                if (secondNumber) {
                    return
                }
                clear()
                operator = value
                display.innerText += value
            }
                    
            if(!operator) {
                firstNumber = display.innerText
                operator = value
                display.innerText += value
            }
        }

        // math
        if (value === "=") {
            if (!secondNumber) {
                return
            }
            calc()
        }

        // percentage math
        if (value === "%") {
            if (!secondNumber) {
                return
            }
            calcPercentage()
        }
    })
})

function clear() {
    if (operator) {
        if(secondNumber) {
            secondNumber = secondNumber.slice(0, -1)
        }
        
        else {
            operator = null;
        }
    }
    
    // display.innerText = display.innerText.substring(0, display.innerText.length - 1)
    display.innerText = display.innerText.slice(0, -1)
    
    if(!display.innerText) {
        clearAll()
    }
}

function clearAll() {
    display.innerText = "0"
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function resetVariables() {
    firstNumber = display.innerText;
    secondNumber = null;
    operator = null;
}

function calc() {
    if (operator === "+") {
        display.innerText = parseFloat(firstNumber) + parseFloat(secondNumber)
        console.log("First number " + parseFloat(firstNumber) + " Second Number " + parseFloat(secondNumber))
        resetVariables()
    }

    if (operator === "-") {
        display.innerText = parseFloat(firstNumber) - parseFloat(secondNumber)
        resetVariables()
    }

    if (operator === "/") {
        display.innerText = parseFloat(firstNumber) / parseFloat(secondNumber)
        resetVariables()
    }

    if (operator === "*") {
        display.innerText = parseFloat(firstNumber) * parseFloat(secondNumber)
        resetVariables()
    }
}

function calcPercentage() {
    if (operator === "+") {
        display.innerText = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber) + parseFloat(firstNumber)
        resetVariables()
    }

    if (operator === "-") {
        display.innerText = parseFloat(firstNumber) - (parseFloat(firstNumber) / 100) * parseFloat(secondNumber) 
        resetVariables()
    }

    if (operator === "/") {
        display.innerText = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber)
        resetVariables()
    }

    if (operator === "*") {
        display.innerText = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber) 
        resetVariables()
    }
}

