class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Getter and Setter for age
  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  // Method for Student to study
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  // Method for Teacher to teach
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
