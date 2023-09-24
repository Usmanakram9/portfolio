class Person{
    constructor(name, age){
        this.fname = name;
        this.lage = age;
    }
    set newName(abc){
        this.fname = abc;
    }
    get getAge(){
        return this.lage;
    }
    increaseAge(){
        this.lage = this.lage - 4;
    }
}

const newPerson = new Person('Shani', 20);
console.log(newPerson.fname, newPerson.lage);

newPerson.newName = 'Arslan';
console.log(newPerson.fname, newPerson.lage);

let talliKiAge = newPerson.getAge;
console.log(talliKiAge);

const newPerson2 = new Person('ArslanaG', 28);
newPerson2.increaseAge();
console.log(newPerson2.fname, newPerson2.lage);

