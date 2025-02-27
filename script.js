//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	setName(name){
		this.name = name;
	}
	
	getName(){
		return this.name;
	}
	setAge(age){
		this.age = age;
	}
	
}

class Student extends Person {
	super();
	study(){
		console.log(`${getName() is studying`)
	}
}

class Teacher extends Person {
	super();
	teach(){
			console.log(`${getName() is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const person = new Person("John", 25);

