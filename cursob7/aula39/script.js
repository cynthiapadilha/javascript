class Person {
    age = 0;
    step = 0;
    constructor (name){
        this.name = name
    }

    takeAStep(){
        this.step++;
    }

    setAge (newAge){
        if (typeof newAge == 'number'){
            this.age = newAge;
        }else{
            console.log ('Digite um número');
        }
    }
}

let p1 = new Person ('Maria')
p1.age = 20
p1.takeAStep()
p1.takeAStep()
p1.takeAStep()
p1.takeAStep()
console.log (p1)

