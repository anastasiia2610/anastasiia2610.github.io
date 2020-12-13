'use strict';

function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    };
}



function createKeyBy(propName) {

    return function keyBy(array) {

        return array.reduce((result, elem) => {

            const keyValue = elem[propName];

            result[keyValue] = result[keyValue] || [];

            result[keyValue].push(elem);

            return result;

        }, {});
    }
};


function createCalcPercent(percent) {
    return function calcPercent(value){
       return (value / 100) * percent;
    }
}


