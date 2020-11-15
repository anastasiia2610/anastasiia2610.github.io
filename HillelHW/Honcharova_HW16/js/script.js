'use strict';

const arr = [{
        name: 'Vasya',
        surname: 'Ivanov'
    },
    {
        name: 'Vanya',
        surname: 'Ivanov'
    },
    {
        name: 'Albert',
        surname: 'Vasyliev'
    },
];

function keyBy(arr, key) {
    return arr.reduce((result, elem) => {
        const keyValue = elem[key];
        result[keyValue] = result[keyValue] || [];
        result[keyValue].push(elem);
        return result;
    }, {});
}

console.log(keyBy(arr, 'name'));
console.log(keyBy(arr, 'surname'));

