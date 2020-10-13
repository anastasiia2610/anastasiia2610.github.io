'use strict'

const beerOffering1 = confirm('Would you like to drink some beer?');

if (beerOffering1) {
    alert('OK, we have a gift for you - free snacks to beer!');
} else {
    alert('Thanks for your attention, see you next time!');
}


const beerOffering2 = confirm('Would you like to drink some beer?');

const beerAgreement = beerOffering2 ? 'OK, we have a gift for you - free snacks to beer!' : 'Thanks for your attention, see you next time!';

alert(beerAgreement);



const userAge1 = prompt('How old are you?');

if (userAge1 < 18) {
    alert('Sorry, you have not reached legal age yet!');
} else if (userAge1 > 30){
    alert('Welcome to our web-site!');
} else {
    alert('Yo, whats up?');
}


const userAge2 = prompt('How old are you?');

const legalAge = (userAge2 < 18) ? 'Sorry, you have not reached legal age yet!' : (userAge2 > 30) ? 'Welcome to our web-site!' : 'Yo, whats up?';

alert(legalAge);



const drinkChoosing1 = prompt('Would you like some coffee or some tea?', 'tea');

alert(drinkChoosing1);

const addSugar1 = confirm('Do you drink with added sugars?');

if (addSugar1){
    alert(`Thank you for choosing our cafe! Your order: a cup of ${drinkChoosing1} with sugar!`);
} else {
    alert(`Thank you for choosing our cafe! Your order : a cup of ${drinkChoosing1}!`);
} 


const drinkChoosing2 = prompt('Would you like some coffee or some tea?', 'tea');

alert(drinkChoosing2);

const addSugar2 = confirm('Do you drink with added sugars?');

const userOrder = true ? `Thank you for choosing our cafe! Your order: a cup of ${drinkChoosing1} with sugar!` : `Thank you for choosing our cafe! Your order : a cup of ${drinkChoosing1}`;

alert(userOrder);


