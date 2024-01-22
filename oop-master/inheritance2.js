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
}

class Student extends PersonCl{
	constructor(fullName, birthYear, course){
		super(fullName, birthYear)
	}
}

const jessica = new Student('Jessica', 2007, 'Computer Science')
const daniel = new Student('Jessica', 2007, 'Computer Science')