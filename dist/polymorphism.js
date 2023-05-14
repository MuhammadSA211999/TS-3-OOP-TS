"use strict";
//Polymorphism: Parent class er kuno pro/method zodi Child class e bebohar hoy othoba exist kore and Parent class er ceye diffrent output dey, tokhon seta ke polymorphism bole|
//Shape hocce Parent class and getArea method class Circle, Ract e o takbe
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.r = radius;
    }
    getArea() {
        return Math.PI * this.r * this.r;
    }
}
class Reactangle extends Shape {
    constructor(h, w) {
        super();
        this.height = h;
        this.width = w;
    }
    getArea() {
        return this.height * this.width;
    }
}
//access class method by function getMethod()
function getMethod(instance) {
    return instance.getArea();
}
//instance's
const shape = new Shape();
const circle = new Circle(4);
const reactangle = new Reactangle(3, 5);
//call getMethod function 
console.log(getMethod(circle));
console.log(getMethod(reactangle));
