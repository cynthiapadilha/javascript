class Person {
    age = 0;

    constructor (name){
        this.name = name;
    }
}

function createPerson(name,age){
    let p = new Person (name);
    p.age = age;
    return p;
}
let p1 = createPerson('Cynthia',20);

console.log (p1)

