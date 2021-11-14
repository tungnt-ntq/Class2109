// Bổ sung kiến thức về Object
// Overview về Class
// Xử lý bất đồng bộ trong js
// Các cách để clone Object.
let a = {
  name: "Tung",
  age: 18,
  data: {
    class: "T3h",
  },
};
let b = JSON.parse(JSON.stringify(a));
b.name = "Change name";
// console.log(a.name, b);

// shadow clone
let c = Object.assign({}, a);
// c.data.class = "change T3h";
// console.log(c, a);

// toán tử ...
let newCopy = { ...a, item: "lop 2" };
newCopy.name = "new copy";
// console.log(newCopy, a);

// Deep clone
// let b = JSON.parse(JSON.stringify(a));
let deep = JSON.parse(JSON.stringify(a));
deep.data.class = "D change class";
// console.log(deep, a);

let name = "Tung";
let age = 20;
let product = "Iphone";

let wrap = {
  name,
  age,
  product,
  class: "T3h",
  certificate: "NodeJs",
};

// Duyệt các key và các value
// console.log(Object.keys(wrap));
// console.log(Object.values(wrap));

// Class

class Cat {
  constructor(name, color, kg) {
    this.name = name;
    this.color = color;
    this.kg = kg;
  }
  run = () => {
    // console.log(`${this.name} ${this.color} is running, ${this.kg}`);
  };
}

let meoA = new Cat("meo A", "Mau do", 10);
let meoB = new Cat("meo B");
meoA.run();
meoB.run();

// // kế thừa trong class

class Animal {
  constructor(name) {
    this.name = name;
  }
  fly = () => {
    // console.log(`${this.name} is flying`);
  };
}

class Bird extends Animal {
  getName = () => {
    // console.log("aaaaaa");
  };
}
const bocau = new Bird("Chinh bo cau");
bocau.getName();
bocau.fly();

// JS: 3 cách chính để xử lý bất đồng bộ. => callback, promise, async await
// Cách 1: Callback.
// tính diện tích hình thang. (a + b) * h / 2
// phép cộng : phải xử lý mất 3s
// phép nhân : Xử lý mất 5s
// Phép chia: xử lý mất 2

function cong(a, b, cb) {
  console.log("băt đầu cộng.");
  setTimeout(() => {
    let sum = a + b;
    console.log("Cộng xong", sum);
    return cb(sum);
  }, 3000);
}

// function KetquaPhepcong(params) {
//   console.log("Kêt qua phép cong", params);
// }
// cong(20, 13, KetquaPhepcong);
function nhan(a, b, functionCB) {
  console.log("băt đầu nhan.");
  setTimeout(() => {
    let mul = a * b;
    console.log("nhan xong", mul);
    return functionCB(mul);
  }, 5000);
}

function chia(a, b, cb) {
  console.log("băt đầu chia.");
  setTimeout(() => {
    let mil = a / b;
    console.log("chia xong", mil);
    return cb(mil);
  }, 2000);
}
function callApi(cb) {
  console.log("băt đầu call.");
  setTimeout(() => {
    return cb("Da lay duoc data");
  }, 5000);
}

function getData(data) {
  console.log(data);
}

callApi(getData);
//call back hell
function ketqua(daylon, daynho, chieucao, a, b, c, cb) {
  cong(daylon, daynho, (resultTong) => {
    nhan(resultTong, chieucao, (resultNhan) => {
      chia(resultNhan, 2, (done) => {
        cong(done, a, (doneA) => {
          chia(doneA, b, (doneB) => {
            nhan(doneB, c, (doneC) => {
              return cb(doneC);
            });
          });
        });
      });
    });
  });
}
ketqua(20, 10, 15, 8, 10, 2, (resultFinish) => {
  console.log("ket qua cuói", resultFinish);
});

// function greeting(name) {
//   alert("Hello", name);
// }

// function processUserInput(callback) {
//   var name = prompt("Please enter your name");
//   callback(name);
// }

// processUserInput(greeting);
