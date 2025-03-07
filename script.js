class Person {
	constructor(name, age) {
        this.name = name;
        this.age = age;
    }

	setname(name){
		this.name = name;
	}
    getname() {
        return this._name;
    }
    setage(newAge) {
        this.age = newAge;
    }
    getage() {
        return this.age;
    }
}

class Student extends Person {
	constructor(name , age){
		super(name , age)
	}
	study() {
        console.log(${this.getname()} is studying);
    }
}

class Teacher extends Person {
	constructor(name , age){
		super(name , age);
	}
	teach() {
        console.log(${this.getname} is teaching);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;