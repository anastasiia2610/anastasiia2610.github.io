'use strict'

let beerMessage1;

if (beerOffering1) {
   beerMessage1 = 'OK, we have a gift for you - free snacks to beer!';
} else {
   beerMessage1 = 'Thanks for your attention, see you next time!';
}


let beerMessage2 = beerOffering2 ? 'OK, we have a gift for you - free snacks to beer!' :
'Thanks for your attention, see you next time!';



let ageMessage1;

if (userAge1 < 18) {
    ageMessage1 = 'Sorry, you have not reached legal age yet!';
} else if (userAge1 > 30){
    ageMessage1 = 'Welcome to our web-site!';
} else {
    ageMessage1 = 'Yo, whats up?';
}


let ageMessage2 = (userAge2 < 18) ? 'Sorry, you have not reached legal age yet!' : 
(userAge2 > 30) ? 'Welcome to our web-site!' : 'Yo, whats up?';



let drinkChoosingMessage1;

if (addSugar1){
   drinkChoosingMessage1 = `Thank you for choosing our cafe! Your order: a cup of ${drinkChoosingMessage1} with sugar!`;
} else {
    drinkChoosingMessage1 = `Thank you for choosing our cafe! Your order : a cup of ${drinkChoosingMessage1}!`;
} 


let drinkChoosingMessage2 = addSugar2 ? `Thank you for choosing our cafe! Your order: a cup of ${drinkChoosingMessage2} with sugar!` :
`Thank you for choosing our cafe! Your order : a cup of ${drinkChoosingMessage2}`;





