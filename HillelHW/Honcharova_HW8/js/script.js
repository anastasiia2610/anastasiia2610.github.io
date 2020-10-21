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
    alert(pow(a, b));
  }


  
let firstName = 'What is your First Name?';
let lastName = 'What is your Last Name?';
let age = 'How old are you?'; 

function createUser(firstName, lastName, age) { 
  
let object = {
    firstName: firstName || null,
    lastName: lastName || null,
    age: age || null,
}
 return object;
};

createUser();



const askNumber = +prompt("Please, enter your number:");

function insertNumber(askNumber, correctNumber, wrongNumber) {
   
  if (askNumber > 100) {
    correctNumber();
  } else if (askNumber < 100) {
    wrongNumber();
  }
  }

  insertNumber(
    askNumber,
    function () {
      alert('Your number is correct!');
    },
    function () {
      alert('Your number is wrong!');
    },
  );
  

 