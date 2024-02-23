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

  speakEnglish() {
    console.log("Hello C06!");
  }
}

class weakStudent extends Student {
  constructor(id, name, age, level) {
    super(id, name, age);
    this.level = level;
  }

  speakEnglish() {
    console.log("Hế lô C06!");
  }
}

let ty = new goodStudent(1, "Ty", 18, "Gioi");
let teo = new weakStudent(2, "Teo", 18, "Kem");
console.log(ty.speakEnglish());
console.log(teo.speakEnglish());
