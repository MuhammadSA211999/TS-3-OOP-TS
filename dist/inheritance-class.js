"use strict";
class Parent {
    constructor(namee, agee, addresse, institute) {
        this.name = namee; //class property this.pro= func value constructor paramtre
        this.age = agee;
        this.address = addresse;
        this.institute = institute;
    }
    //class-method
    sleepDetail(hours) {
        return `${this.name} is sleeping about ${hours} hours`;
    }
}
class Student extends Parent {
    constructor(studentClasse, name, age, address, institute) {
        super(name, age, institute, address);
        this.studentClass = studentClasse;
    }
    studyDetails(subject) {
        return `${this.name} is finished ${subject} everyday`;
    }
}
class Teacher extends Parent {
    constructor(rolee, name, age, address, institute) {
        super(name, age, address, institute);
        this.role = rolee;
    }
    workDetails(problem) {
        return `${this.name} is research on ${problem}`;
    }
}
//create instance/object from class Students 
const msa = new Student('Honours', 'MSA', 24, 'Sylhet, BD', 'NSTU');
msa.studyDetails(4); //calling self instance method, studyDetails hocce Student class yer nijosso method
msa.sleepDetail(5); //calling instance method msa hocce instance msa -yer method hocce sleepDetails zeta Parent class yer method
const alaUddin = new Teacher('Professor', 'Ala-Uddin', 58, 'Rajshahi', 'RUET');
const workDetails = alaUddin.workDetails('Gasing-Gravity on Tube-light');
console.log(workDetails);
