class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

class Animal {
    constructor(legs) {
        this.legs = legs;
        this.stomach = [];
    }

    eat(food) {
        this.stomach.push(food);
        console.log(`${food} was eaten`);
    }
}

class Rabbit extends Animal {
    constructor(breed) {
        super();

        this.breed = breed;
    }

    eat(food) {
        if (food instanceof Vegetable) {
            return super.eat(food);
        } else {
            throw new Error;
        }
    }

    jump() {
        console.log("Rabbit is jumping");
    }
}

class Snake extends Animal {
    constructor(isPoisonous) {
        super();
        this.isPoisonous = isPoisonous;
    }


    eat(food) {
        if (food instanceof Rabbit) {
            return super.eat(food);
        } else {
            throw new Error;
        }
    }

    crawl() {
        console.log('Snake is crawling');
    }
}

class Human extends Animal {
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(food) {
        if (food instanceof Human) {
            throw new Error;
        } else {
            return super.eat(food);
        }
    }

    walk() {
        console.log("Human is walking");
    }

    greet() {
        console.log(`Hi ${this.firstName} ${this.lastName}!`);
    }
}