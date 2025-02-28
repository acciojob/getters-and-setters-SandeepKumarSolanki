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
}

class Student extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent constructor to initialize name and age
    this.personName = super.getName(); // Store the person's name
  }

  study() {
    console.log(`${this.personName} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent constructor to initialize name and age
    this.personName = super.getName(); // Store the person's name
  }

  teach() {
    console.log(`${this.personName} is teaching`);
  }
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.setAge(30);  // Using the setter to change the age
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
