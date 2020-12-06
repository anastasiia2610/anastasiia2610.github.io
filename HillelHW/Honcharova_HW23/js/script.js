'use strict';

function deepObjectCopy(obj, objectCopy = {}) {

    for (let key in obj) {

        if (typeof obj[key] === 'object') {

            objectCopy[key] = deepObjectCopy(obj[key]);

        } else {

            objectCopy[key] = obj[key];

        }

    }

    return objectCopy;
}

