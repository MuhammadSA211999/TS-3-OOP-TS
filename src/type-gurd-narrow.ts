//TYPE GURD
//keyof gurd function parametre/arguiment check kore kaj kore ba argument type er upor nirbor kore value return kore

//keyof gurd
type Alphaneumeric = string | number
function getValue(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2
    }
    else {
        return param1.toString() + param2.toString()
    }
}

const stringValue = getValue('1', '2')
const numValue = getValue(1, 2)
// console.log(stringValue, numValue)

//in-gurd 
//key-in-gurd object er upor kaj kore| object er nirdisto property-value check kore kaj kore/value return kore

type NormalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: 'admin' /* */
}
type User = AdminUser | NormalUser
function getUser(user: User): string {
    if ('role' in user) {
        //ekhane check kora hocce user ze type diye toiree hoice tar moddhye role property ache kina
        //ekhane user.role=admin accesable
        return `I am an admin user`
    }
    else {
        return `I am a normal user`
    }
}
//make some user with type NormalUser or type AdminUser or type User 
const m_sa: AdminUser = {
    name: 'MSA',
    role: 'admin' //role *admin* chara onno kichu deya zabe na
}
const tarek: NormalUser = {
    name: 'Tarek'
}
const user1 = getUser(m_sa)
const user2 = getUser(tarek)
// console.log(user1, user2)

//gurd of instance: class and class er instance ke gurd kore, instance check kore sei nirdisto instance er method/property guluke access korte pari
//type ke gurd kore instance er method/property guluke access korte pari
class Animal1 {
    name: string;
    species: string;
    constructor(namee: string, spec: string) {
        this.name = namee
        this.species = spec
    }
    makeSound(anim: string): string {
        return `${anim} was make sound`
    }
}

class Dog extends Animal1 {
    constructor(namee: string, spec: string) {
        super(namee, spec)
    }
    dogBarking(sound: string): string {
        return `${this.name} ${sound}ing`
    }
}

class Cat extends Animal1 {
    constructor(namee: string, spec: string) {
        super(namee, spec)
    }
    catMeawing(sound: string): string {
        return `${this.name} ${sound}ing`
    }
}

//make instance with Animal1,Dog,Cat
const cat = new Cat('Cat', 'German')
const dog = new Dog('Dog', 'German')

function getAnimalMethod(animal: Animal1): string {
    if (animal instanceof Dog) {
        return `${animal.dogBarking('bark')}`
    }
    else if (animal instanceof Cat) {
        return `${animal.catMeawing('meaw')}`
    }
    else {
        return animal.makeSound(animal.name)
    }
}

const catMethod = getAnimalMethod(cat)
const dogMethod = getAnimalMethod(dog)
// console.log(catMethod, dogMethod) 

// modern syntex by type checking by function 
// type cheking function
// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog
// }
// function isCat(animal: Animal): animal is Cat {
//     return animal instanceof Cat
// }

// function getAnimalMethod2(animal: Animal1) {
//     if (isDog(animal)) {
//         return animal.dogBarking('bark')
//     }
//     else if (isCat) {
//         return animal.catMeawing('meaw')
//     }
//     else {
//         return animal.makeSound('Tiger')
//     }
// }

// getAnimalMethod2(dog)
// getAnimalMethod2(cat)



