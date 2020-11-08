'use strict';

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;

    this.meow = function () {
        alert(`Hi, my name is ${name}, MEOW ^-^!`);
    }
}

const cat = new Cat('Aria', 'Siamese');

cat.meow();



function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.greet = function () {
        alert(`Hello, ${firstName} ${lastName}!`)
    }
}

const user = new User('Drake', 'Bell', '34');

user.greet();