'use strict';

function fibonacciRecursion(num) {

    if (num === 0) return 0;

    if (num === 1) return 1;

    return fibonacciRecursion(num - 2) + fibonacciRecursion(num - 1);
}


function fibonacciLooping(num) {

    if (num === 0) return 0;

    if (num === 1) return 1;

    let previous = 0,
        next = 1;

    for (let i = 0; i < num; i++) {
        let result = next;

        next = previous + next;

        previous = result;
    }

    return previous;
}



function factorialRecursion(num) {

    if (num < 1) return 1;

    let result = num;

    for (let i = 1; i < num; i++) {
    result *= i;
   }

  return result;
}


function factorialLooping1(num) {
    if ((num != 1)) {
        return num * factorialLooping1(num - 1);
    } else {
        return 1;
    }
}


function factorialLooping2(num) {

    return (num != 1) ? num * factorialLooping2(num - 1) : 1;

}

