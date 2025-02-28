//complete this code
class Person {
	constructor(name , age){
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
	let personName = super.getName();
	study(){
		
		console.log(`${personName} is studying`)
	}
}

class Teacher extends Person {
	let personName = super.getName();
	teach(){
		console.log(`${personName} is teaching`);
	}
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;