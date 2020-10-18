'use strict'

const userLogin = prompt('Please, enter your login:');

let userPassword = prompt('Please, enter your password:');

const login = 'aqua';

const password = '2000';

if (userLogin === login && userPassword === password) {
    alert('Welcome to our web-site!');
} else if (userLogin !== login) {
    alert('Your login incorrect!');
} else {
    while (userPassword !== password) {
        userPassword = prompt('Please, repeat your password:');

      if (userPassword === password) {
          alert('Welcome to our web-site!');
      } else if (userPassword === null) {
          alert('Your password incorrect!'); break
      }
    }
}

 





    
