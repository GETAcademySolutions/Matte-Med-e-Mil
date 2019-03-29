var calcStored = document.getElementById("previousCalculation");
var calcInput = document.getElementById("currentCalculation");

var currentSymbol = 0;


function calculation(btn) {
    if (calcInput.innerHTML == 0) {
        calcInput.innerHTML = btn.innerHTML;
    } else {
        calcInput.innerHTML += btn.innerHTML;
    }
}

function reset() {
    calcInput.innerHTML = 0;
    calcStored.innerHTML = "";
}

function addition() {
    calcStored.innerHTML = calcInput.innerHTML;
    calcInput.innerHTML = 0;
    currentSymbol = 1;
}

function subtraction() {
    calcStored.innerHTML = calcInput.innerHTML;
    calcInput.innerHTML = 0;
    currentSymbol = 2;
}

function multiplication() {
    calcStored.innerHTML = calcInput.innerHTML;
    calcInput.innerHTML = 0;
    currentSymbol = 3;
}

function division() {
    calcStored.innerHTML = calcInput.innerHTML;
    calcInput.innerHTML = 0;
    currentSymbol = 4;
}

function reverse() {
    calcInput.innerHTML *= -1;
}

function equals() {
    if (currentSymbol === 1) {
        calcInput.innerHTML = calcStored.innerHTML + calcInput.innerHTML;
    } else if (currentSymbol === 2) {
        calcInput.innerHTML = calcStored.innerHTML - calcInput.innerHTML;
    } else if (currentSymbol === 3) {
        calcInput.innerHTML = calcStored.innerHTML * calcInput.innerHTML;
    } else if (currentSymbol === 4) {
        calcInput.innerHTML = calcStored.innerHTML / calcInput.innerHTML;
    }
    calcStored.innerHTML = "";
    currentSymbol.innerHTML = 0;
}