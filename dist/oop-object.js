"use strict";
// class Animal {
//     //class property initialization
//     name: string;
//     species: string;
//     sound: string
//     constructor(namee: string, spec: string, sounde: string) {
//         //class property initialized in constructor function
//         //class property value setting 
//         this.name = namee
//         this.species = spec
//         this.sound = sounde
//     }
//     // class method function 
//     makeSound(energy: number) {
//         console.log(`${this.name} is ${this.sound}ing with ${energy} calory energy`)
//     }
// }
// //make instance of Animal class 
// const tiger = new Animal('RB Tiger', 'Mamilia', 'Roar')
// tiger.makeSound(400)
//paramtre properties simple class 
class Animal {
    //class property initialization
    // name: string;
    // species: string;
    // sound: string
    constructor(namee, spec, sounde) {
        this.namee = namee;
        this.spec = spec;
        this.sounde = sounde;
        //class property initialized in constructor function
        //class property value setting 
        // this.name = namee
        // this.species = spec
        // this.sound = sounde
    }
    // class method function 
    makeSound(energy) {
        console.log(`${this.namee} is ${this.sounde}ing with ${energy} calory energy`);
    }
}
//make instance of Animal class 
const zebra = new Animal('African Zebara', 'Mamilia', 'Roar');
zebra.makeSound(400);
