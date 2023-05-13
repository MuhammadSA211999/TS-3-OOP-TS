"use strict";
//TYPE GURD
//keyof gurd function parametre/arguiment check kore kaj kore ba argument type er upor nirbor kore value return kore
function getValue(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
const stringValue = getValue('1', '2');
const numValue = getValue(1, 2);
function getUser(user) {
    if ('role' in user) {
        //ekhane check kora hocce user ze type diye toiree hoice tar moddhye role property ache kina
        //ekhane user.role=admin accesable
        return `I am an admin user`;
    }
    else {
        return `I am a normal user`;
    }
}
//make some user with type NormalUser or type AdminUser or type User 
const m_sa = {
    name: 'MSA',
    role: 'admin' //role *admin* chara onno kichu deya zabe na
};
const tarek = {
    name: 'Tarek'
};
const user1 = getUser(m_sa);
const user2 = getUser(tarek);
console.log(user1, user2);
//gurd of instance: class and class er instance ke gurd kore, instance check kore
class Animal1 {
    constructor(namee, spec) {
        this.name = namee;
        this.species = spec;
    }
    makeSound(anim) {
        return `${anim} was make sound`;
    }
}
class Dog extends Animal1 {
    constructor(namee, spec) {
        super(namee, spec);
    }
    dogBarking(sound) {
        return `${this.name} ${sound}ing`;
    }
}
class Cat extends Animal1 {
    constructor(namee, spec) {
        super(namee, spec);
    }
    catMeawing(sound) {
        return `${this.name} ${sound}ing`;
    }
}
//make instance with Animal1,Dog,Cat
const cat = new Cat('Cat', 'German');
const dog = new Dog('Dog', 'German');
function getAnimalMethod(animal) {
    if (animal instanceof Dog) {
        return `${animal.dogBarking('bark')}`;
    }
    else if (animal instanceof Cat) {
        return `${animal.catMeawing('meaw')}`;
    }
    else {
        return animal.makeSound(animal.name);
    }
}
const catMethod = getAnimalMethod(cat);
const dogMethod = getAnimalMethod(dog);
console.log(catMethod, dogMethod);
