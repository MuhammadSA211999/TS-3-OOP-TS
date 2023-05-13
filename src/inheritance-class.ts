class Parent {
    name: string;
    age: number;
    address: string;
    institute: string;
    constructor(namee: string, agee: number, addresse: string, institute: string) {
        this.name = namee //class property this.pro= func value constructor paramtre
        this.age = agee
        this.address = addresse
        this.institute = institute
    }
    //class-method
    sleepDetail(hours: number): string {
        return `${this.name} is sleeping about ${hours} hours`

    }
}

class Student extends Parent {
    studentClass: string;
    constructor(studentClasse: string, name: string, age: number, address: string, institute: string) {
        super(name, age, institute, address)
        this.studentClass = studentClasse
    }

    studyDetails(subject: number): string {
        return `${this.name} is finished ${subject} everyday`
    }
}

class Teacher extends Parent {
    role: string;
    constructor(rolee: string, name: string, age: number, address: string, institute: string) {
        super(name, age, address, institute)
        this.role = rolee
    }

    workDetails(problem: string): string {
        return `${this.name} is research on ${problem}`
    }
}
//create instance/object from class Students 
const msa = new Student('Honours', 'MSA', 24, 'Sylhet, BD', 'NSTU')
msa.studyDetails(4) //calling self instance method, studyDetails hocce Student class yer nijosso method
msa.sleepDetail(5) //calling instance method msa hocce instance msa -yer method hocce sleepDetails zeta Parent class yer method

const alaUddin = new Teacher('Professor', 'Ala-Uddin', 58, 'Rajshahi', 'RUET')
const workDetails = alaUddin.workDetails('Gasing-Gravity on Tube-light')
console.log(workDetails)