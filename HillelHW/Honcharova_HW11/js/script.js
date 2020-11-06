'use strict';

const object = {
    '0': 'zero',
    '42': 'answer',
    'greeting': 'Hello',
    '3.14': 'PI',
};

function outputValueWithNumber(obj) {
    for (let key in obj) {
        if (!isNaN(key)) {
            console.log(obj[key]);
        };
    };
};

outputValueWithNumber(object);