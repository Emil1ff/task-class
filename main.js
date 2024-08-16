
// Person classi yaradib ona name age ve surname verin daha sonra onun doğum ilini hesablayan class icinde bir function yazin
// Meselen age 20 verdiyimizde function 2004 nəticəsini versin
class Person {
    constructor(name, age, surname) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }
    getBirthTear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}
const person = new Person("Emil", "18", "Hesenov")
console.log(person.getBirthTear());