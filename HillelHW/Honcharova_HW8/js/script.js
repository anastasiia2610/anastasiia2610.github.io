'use strict';

function pow(a, b) {
    let result = a;
  
    for (let i = 1; i < b; i++) {
      result *= a;
    }
  
    return result;
  }
  
  let a = prompt('Please, enter the first number:');
  let b = prompt ('Please, enter the second number:');
  
  if (b < 1) {
    alert(`Operation ${b} is not supported!`);
  } else {
    alert( pow(a, b) );
  }


  
let createUser = function(firstName, lastName, age) { 
    firstName = prompt('What is your First Name?');
    lastName = prompt('What is your Last Name?');
    age = prompt('How old are you??');
    
    alert(`${firstName} ${lastName}, ${age}!`);
  };

  createUser();



let number = prompt("Please, enter your number:");

let result;
  
if (number < 100) {
    result = function() {
    alert(`${number} is not good enough!`);
    };
} else {
    result = function() {
    alert(`${number} is good!`);
    };
  }
  
  result();