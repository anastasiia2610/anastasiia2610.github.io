'use strict'

const number1 = Math.trunc (+prompt("Please, enter the first number"));
const number2 = Math.trunc (+prompt("Please, enter the second number"));

const result1 = Math.round (number1 / number2) * number2 || number2 && Math.max (number1, number2);


result1 && alert(result1);
result1 || alert("Error 404");