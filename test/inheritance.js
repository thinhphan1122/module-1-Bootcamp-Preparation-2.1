class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  //getters, setters

  get getName() {
    return this.name;
  }

  /**
   * @param {any} name
   */
  set setName(name) {
    this.name = name;
  }
}

class goodStudent extends Student {
  constructor(id, name, age, level) {
    super(id, name, age);
    this.level = level;
  }
  //getters, setters
  get getName() {
    return this.name;
  }

  /**
   * @param {any} name
   */
  set setName(name) {
    this.name = name;
  }

  get getLevel() {
    return this.level;
  }

  /**
   * @param {any} level
   */
  set setLevel(level) {
    this.level = level;
  }
}

let ty = new Student(1, "Ty", 18);
let teo = new goodStudent(2, "Teo", 18, "Gioi");
console.log(ty);
console.log(teo);
