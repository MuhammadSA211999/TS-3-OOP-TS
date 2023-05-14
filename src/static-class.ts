class Counter {
    static counter: number = 0

    //normal method
    currentCounter() {
        // return this.counter kuno class property static hole seta this diye pawya zay na
    }
    //static method
    static increment(): number {
        return Counter.counter = Counter.counter + 1
    }
    static decrement(): number {
        return Counter.counter = Counter.counter - 1
    }
}

//class property-method static hole class instance theke access kora zay na. sorasori class theke accept korte hoy

console.log(Counter.increment())
console.log(Counter.increment())