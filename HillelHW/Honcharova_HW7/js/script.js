'use strict'

const userName = 'Jimbo';

const userAge = 19;

const userRole = 'Admin';

const userOccupation = 'CEO';

const result1 = userName && userAge > 18;

const result2 = userRole === 'Admin' || userOccupation === 'CEO';

const result3 = userRole ?? userOccupation;
 
const result4 = (userName && userAge > 18) && userRole === 'Admin';

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);