'use strict';

const randomNumber = Math.floor(Math.random() * 100 + 1);

console.log(randomNumber);

function offerToPlayAgain(offerMessage = confirm('Хотите поиграть снова?')) {
    offerMessage ? guessTheNumber() : alert ('Спасибо, ждём Вас снова!');
} 


function guessTheNumber (userNumber = Number(prompt('Угадайте число!'))){
  const resultNumber = randomNumber;
  
        while (userNumber !== resultNumber){
            if (userNumber > resultNumber) {
                alert('Много');
                userNumber = Number(prompt('Угадайте число!'));
            } else if (userNumber < resultNumber) {
                alert('Мало');
                userNumber = Number(prompt('Угадайте число!'));
            } else if (userNumber = NaN){
                userNumber = Number(prompt('Угадайте число!'));
                } 
        }

        alert('Поздравляем, вы виграли! Сыграем ещё раз?')
        offerToPlayAgain();
    }


guessTheNumber();