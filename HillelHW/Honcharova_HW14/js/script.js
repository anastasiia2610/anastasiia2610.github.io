'use strict';

const array = ['Apple', 'Banana', 'Pineapple'];
array.push('Orange', 'Grapes');

const array2 = array.splice(1, 1, 'Peer');

const array3 = array.pop();

console.log(array3);

array.unshift('Watermelon'); 