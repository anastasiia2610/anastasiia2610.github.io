'use strict';

function capitalize(string) {
    return string
        .split(' ')
        .map(elem => (elem[0].toUpperCase() + elem.substr(1)))
        .join(' ');
}

console.log(capitalize('pilot baker builder manager'));



function checkSubstring(string, substring) {
    return string.toUpperCase()
        .includes(substring.toUpperCase());
}

console.log(checkSubstring('Winter is coming', 'winter'));