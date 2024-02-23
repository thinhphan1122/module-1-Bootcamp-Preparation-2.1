class StudentAction {
  constructor(id, name, age) {
    study();
    absent();
    doExam();
    }
  }

class goodStudent extends StudentAction {
  constructor(id, name, age, level) {
    this.id = id;
    this.name = name;
    this.age = age;
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
console.log(ty);
