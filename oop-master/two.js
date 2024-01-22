"use strict"

// CLASS IMPLEMENTATIION

// class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}
	calcAge() {
		console.log(2024 - this.birthYear)
	}
	greeting() {
		console.log(`Hello ${this.firstName}🤭, how are you doing? `)
	}
	get age() {
		return 2024 - this.birthYear
	}
	// set fullName(name){
	// 	console.log(name)
	// 	if(name.includes(' ')) this._fullName = name;
	// 	else alert(`${name} aint full name 😏`)
	// }
	// get fullName(){
	// 	return this._fullName;
	// }
	// static hey(){
	// 	console.log('Hey')
	// }
}

const jessica = new PersonCl('Jessica Apolot', 2007);
const daniel = new PersonCl('Daniel Okumu', 1999);
// console.log(jessica)
console.log(jessica.age)
jessica.calcAge()



console.log(jessica.__proto__.__proto__);

jessica.greeting()


const stephen = new PersonCl()

// CLASSES are not hoisted in OOP
// Classes are first-class citizens



/* Getters & Setters */


const account = {
	owner: "Daniel",
	movements: [200, 435, 500, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop()
	},
	set latest(mov) {
		return this.movements.push(mov)
	}
}
console.log(account.latest)

account.latest = 40;

console.log(account.movements)

/* STATIC METHOD */




const PersonProto = {
	calcAge() {
		console.log(2024 - this.birthYear)
	},
	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear
	}
}

const howard = Object.create(PersonProto);
howard.init('Howard', 2000)
console.log(howard);
howard.calcAge()





