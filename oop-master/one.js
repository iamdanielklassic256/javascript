

const Person = function (firstName, birthyear) {
	// instance property
	this.firstName = firstName;
	this.birthyear = birthyear;

}
const Jessica = new Person('Jessica', 2007); //instances of class
const Daniel = new Person('Daniel', 1999);
const Inno = new Person('Innocent', 2006);
// console.log(Jessica, Daniel, Inno)


console.log(Person.prototype)

Person.prototype.calcAge = function () {
	console.log(2024 - this.birthyear)
}
Jessica.calcAge();
Daniel.calcAge();
Inno.calcAge();

console.log(Daniel.__proto__);
console.log(Daniel.__proto__ === Person.prototype);


console.log(Person.prototype.isPrototypeOf(Daniel));
console.log(Person.prototype.isPrototypeOf(Jessica));
console.log(Person.prototype.isPrototypeOf(Inno));


Person.prototype.species = "Homo Sapiens";
console.log(Daniel.species, Jessica.species);

console.log(Daniel.hasOwnProperty('firstName'));
console.log(Jessica.hasOwnProperty('firstName'));

console.log(Jessica.__proto__);
// Object.prototype at the of top of prototype chain
console.log(Jessica.__proto__.__proto__);
console.log(Jessica.__proto__.__proto__.__proto__);

const arr = [2,5,6,7,8,9,3,8,2]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)



Array.prototype.unique = function(){
	return [...new Set(this)]
}
console.log(arr.unique())


const h1 = document.querySelector('h1')
console.dir(h1)