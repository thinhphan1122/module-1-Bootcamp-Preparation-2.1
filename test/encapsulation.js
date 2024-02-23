class student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  get getId() {
    return this.id;
  }

  /**
   * @param {any} id
   */
  set setId(id) {
    this.id = id;
  }

  get getName() {
    return this.name;
  }

  /**
   * @param {any} name
   */
  set setName(name) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }

  /**
   * @param {any} age
   */
  set setAge(age) {
    this.Age = age;
  }
}

let studentB = new student(2, "Tran Van Ty", 18);
console.log(studentB);
console.log(studentB.id);   //Not recommend if using OOP
console.log(studentB.name); //Not recommend if using OOP
console.log(studentB.age);  //Not recommend if using OOP