//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	
	
	getName(){
		return this.name;
	}
	setAge(age){
		this.age = age;
	}
	
}

class Student extends Person {
	
	study(){
		super()
		console.log(`${this.getName() is studying`)
	}
}

class Teacher extends Person {
	
	teach(){
			super();
			console.log(`${this.getName() is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const person = new Person("John", 25);

