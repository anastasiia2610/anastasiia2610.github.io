'use strict';

const obj1 = {};

const obj2 = {
    role : 'lider',
    level : 100,
}

function returnTrueOrFalse (obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
