function Mouse(name) {
  this.name = name;
}

class Cat {
  constructor(name) {
    this.name = name;
  }
  run = () => {
    console.log(`${this.name} is running`);
  };
}
class Animal {
  constructor(name) {
    this.name = name;
  }
  fly = () => {
    console.log(`${this.name} is running`);
  };
}
class Bird extends Animal {}
const mouse = new Mouse("tung");
const cat = new Cat("Cat");
cat.run();
const bird = new Bird("bo cau");
bird.fly();
