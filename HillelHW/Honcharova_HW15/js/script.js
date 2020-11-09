'use strict';

const arrSum = [5, 10, 15, 20];

function powNumbers(arr) {
    return arr.reduce((result, num) => result + num);
}

console.log(powNumbers(arrSum));



function powNumbers(arr) {
    let result = null;
    for (let value of arr) {
        result += value;
    }
    return result;
}

console.log(powNumbers(arrSum));



const arrString = ["history", "archeology", "numismatics", "hagiography"]

function mapToUpperCase(arr) {
    const arrString = arr.map((word) => word.toUpperCase())
    return arrString;
}

console.log(mapToUpperCase(arrString));

function mapToUpperCase(arr) {
    const arrString = [];
    for (let value of arr) {
        arrString.push(value.toUpperCase());
    }
    return arrString;
}

console.log(mapToUpperCase(arrString));


