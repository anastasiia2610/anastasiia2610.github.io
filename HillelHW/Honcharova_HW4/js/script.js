'use strict'

let beerMessage1;

if (beerOffering1) {
    beerMessage1 = 'OK, we have a gift for you - free snacks to beer!';
} else {
    beerMessage1 = 'Thanks for your attention, see you next time!';
}


const beerMessage2 = beerOffering2 ? 
    'OK, we have a gift for you - free snacks to beer!' :
    'Thanks for your attention, see you next time!'; 


let ageMessage1;

if (userAge1 < 18) {
    ageMessage1 = 'Sorry, you have not reached legal age yet!';
} else if (userAge1 > 30){
    ageMessage1 = 'Welcome to our web-site!';
} else {
    ageMessage1 = 'Yo, whats up?';
}


const ageMessage2 = (userAge2 < 18) ?
    'Sorry, you have not reached legal age yet!' : 
    (userAge2 > 30) ?
    'Welcome to our web-site!' : 
    'Yo, whats up?';



let drinkMessage1;

if (isTea1) {
    drinkMessage1 = 'Thank you for choosing our cafe! Your order: a cup of tea!';
} else if (hasSugar1) {
    drinkMessage1 = 'OK, we added sugar to your drink!';
} else {
    'Thank you for choosing our cafe! Your order : a cup of coffee!'
}


const drinkMessage2 = isTea2 ?
    'Thank you for choosing our cafe! Your order : a cup of tea!':
    hasSugar2 ?
    'OK, we added sugar to your drink!' :
    'Thank you for choosing our cafe! Your order : a cup of coffee!';





