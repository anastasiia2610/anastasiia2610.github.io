'use strict'

const userLogin = prompt('Please, enter your login:');

let login = 'anesthesia';

const userPassword = prompt('Please, enter your password:');

let password = '26102000';

const greeting = 'Welcome to our web-site!';

const repeatPassword = 'Please, enter the password again';

 if (login !== userLogin) {
    alert('Your login is incorrect');
} 

if (password !== userPassword) {
    alert('Your password is incorrect');
    confirm(repeatPassword);
    prompt(userPassword);
} else if (login === userLogin && password === userPassword) {
    alert(greeting);
}




    
