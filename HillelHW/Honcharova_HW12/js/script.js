'use strict';

const salaries = {

    HRs: {
        Alice: 500,
        Bob: 700
    },

    Devs: {
        Carol: 2500,
        Carlos: 1000,
        Charles: 1500
    },

    QAs: {
        Chuck: 1650,
        Craig: 850,
        Dave: 3000
    }

};

function multiplyValues(object) {
    let salaries2 = {};

    for (let key in object) {
        salaries2[key] = {};
        for (let key2 in object[key]) {
            salaries2[key][key2] = object[key][key2] * 2;
        }
    }
    return salaries2;
}

console.log(multiplyValues(salaries));