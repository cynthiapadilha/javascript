let person = {
    name:'Cy',
    lastName: 'Padilha',
    age: 20,
    getFullName(){
        return `${this.name} ${this.lastName}`
    }
}
console.log(person.getFullName());