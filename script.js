class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }

	getAge(){
		return this.age;
	}
}

class Student extends Person {

  study() {
    console.log(`${this.personName} is studying`);
  }
}

class Teacher extends Person {
	teach() {
	    console.log(`${this.personName} is teaching`);
	  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
