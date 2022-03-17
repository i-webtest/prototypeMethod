"use strict";

class First {
  constructor(parent) {
    this.parent = parent;
  }

  hello() {
    console.log(this.parent);
  }
}

class Second extends First {
  hello() {
    console.log(this.parent);
  }
}

const first = new First("Привет я метод родителя!");
const second = new First("А я наследуемый метод!");

first.hello();
second.hello();
