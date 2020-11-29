'use strict';

const container = document.querySelector('#container');


const containerId = document.getElementById('container');


const secondLi = document.querySelectorAll('.second');


const thirdLi = document.querySelector('ol .third');


const headerGreeting = document.querySelector('.header');

headerGreeting.innerHTML = '<p>Hello!</p>';


const footer = document.querySelector('.footer');

footer.classList.add('main');

footer.classList.remove('main');


const createLi = document.createElement('li');

const ul = document.querySelector('ul');

createLi.textContent = 'four';

ul.append(createLi);


const olListBackground = document.querySelectorAll('ol li');

for (let i = 0; i < olListBackground.length; i++) {
    olListBackground[i].style.backgroundColor = 'green';
}


const removeDiv = document.querySelector('.footer');

removeDiv.remove();