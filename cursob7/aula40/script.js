class Person{
    _age = 10;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    get age() {
        return this._age;
    }

    set age(x) {
        if (typeof x == 'number'){
            this._age = x;
        }
    }
}


let p1 = new Person ('Maria','Lacerda');
p1.age = 20;
console.log (`${p1.fullName} tem ${p1.age} anos.`);


    

   

