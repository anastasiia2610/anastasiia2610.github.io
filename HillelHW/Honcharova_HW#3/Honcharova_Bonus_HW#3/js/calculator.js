
const buttonPlus = document.getElementById("buttonPlus");
const buttonMinus = document.getElementById("buttonMinus");
const buttonMultiply = document.getElementById("buttonMultiply");
const buttonDivide = document.getElementById("buttonDivide");
const buttonExponentiation = document.getElementById("buttonExponentiation");


const input1 = document.getElementById ('number3');
const input2 = document.getElementById ('number4');


function getNumber3(){
    return Number(input1.value);
}

function getNumber4(){
    return Number(input2.value);
}


function onButtonPlusClick () {
   const result2 = getNumber3() + getNumber4() || number4 && Math.max (number3, number4);
   alert(result2);
}

function onButtonMinusClick () {
    const result2 = getNumber3() - getNumber4() || number4 && Math.max (number3, number4);
    alert(result2);
}

function onButtonMultiplyClick () {
    const result2 = getNumber3() * getNumber4() || number4 && Math.max (number3, number4);
    alert(result2);
}

function onButtonDivideClick () {
    const result2 = getNumber3() / getNumber4() || number4 && Math.max (number3, number4);
    alert(result2);
}

function onButtonExponentiationClick () {
    const result2 = getNumber3() ** getNumber4() || number4 && Math.max (number3, number4);
    alert(result2);
}



buttonPlus.addEventListener ('click', onButtonPlusClick);
buttonMinus.addEventListener ('click', onButtonMinusClick);
buttonMultiply.addEventListener ('click', onButtonMultiplyClick);
buttonDivide.addEventListener ('click', onButtonDivideClick);
buttonExponentiation.addEventListener ('click', onButtonExponentiationClick);

