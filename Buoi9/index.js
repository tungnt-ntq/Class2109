var nameScope;

// Bài 9 :
// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’
// dùng for. chạy từ đầu đến giữa
// check các phần tử có bằng các phần tử cuối hay không
let n = 123966321 + "";
// n.length = 9 / 2 =  4.5  => chạy từ 0 -> 4

function isPalindrome(str) {
  for (let i = 0; i < n.length / 2; i++) {
    if (n[i] !== n[n.length - i - 1]) {
      return false; // thoát khỏi hảm
    }
  }
  return true;
}

// console.log(isPalindrome(n));

// 1. Khai báo function
// c1 => không có giá trị trả về. đóng vai trò như là gom các đoạn code lại.
function sayHello() {
  console.log("Hello 123123123");
  console.log("Hello 123123123");
  console.log("Hello 123123123");
  console.log("Hello 123123123");
  console.log("Hello 123123123");
  console.log("Hello 123123123");
}
// c2
// const sayHello2 = function () {
//   console.log("Hello ");
// };

// sayHello();
// function có giá trị trả về. có return. => giống như khai báo 1 biến.

function tinhTong() {
  return 10;
}
// let tinhTong = 10
console.log(tinhTong() + tinhTong());

// function có tham số.
//  phép trừ 2 số
function phepTru(a = 3, b = 1, c) {
  return a - b + " hay lam";
}

let thuong = phepTru(null, 4, 6);
console.log(thuong);
// scrop của function.

var num1 = 20;
var num2 = 3;
var name = "Tung";
function multiply() {
  return num1 * num2;
}
// console.log(multiply());

function getScore() {
  var num1 = 50;
  var num2 = 50;
  function add() {
    return name + " score " + (num1 + num2);
  }
  return add();
}

console.log(getScore());
// khacs nhau giữa let , var => khác nhau ở scope.

function scopeDif(params) {
  nameScope = "Tung";
  let nameLet = "Let"; // phạm vi hoạt động chỉ trong scope mà nó được khai báo .
  console.log(nameScope);
}
// nameScope = "Hoàng";

scopeDif();
nameLet = "Test";
// arrow function .
const tinhTong2 = (a, b) => {
  return a + b;
};

const tinhTong3 = (a) => {
  return a + 5;
};
const tinhTong4 = () => {
  return a + 5;
};
const tinhTong5 = () => console.log("gia tri a ");
console.log(tinhTong2(10, 10));
console.log(tinhTong5());

function checkReturn(params) {
  return "tung";
  let a = 20;
  console.log(a);
}
console.log(checkReturn());

//  number: Convers,
// Convert to Number: Number.parseFloat()/parseFloat(), Number.parseInt()/parseInt(), Number()
// 1.2 , 3.4, 5, 6,6
let number1 = "tung";
let converts1 = Number.parseFloat(number1);
// check có phải là số hay không. isNaN
let conver2 = isNaN(number1);
console.log(conver2);
// Maths làm tròn
let math1 = 20.1;
console.log(Math.floor(math1));

// Math radom.
console.log(Math.random());
// random trong 1 khoảng 1-6

function radomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(radomInt(10, 20));
// String
// thao tác với chuỗi đơn giản.
let str1 = "tung đa được the xanh";
let str2 = "HOANG";
let total = `${str1}   helo  \n    ${str2} \nhelo`;
let total2 = str1 + "        hello    " + str2;
console.log(total);
//  các method của string.
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.toLowerCase().charAt(0));
// tách chuỗi. slice, subtring, stubstr
console.log("tesst slice", str1.slice(9)); // lấy bắt tđầu từ thằng 0 -> kết thúc trước thằng 6 ( 5)
console.log(str1.substring(0, 9)); // lấy bắt tđầu từ thằng 0 -> kết thúc trước thằng 6 ( 5)
console.log(str1.substr(0, 9)); // lấy bắt tđầu từ thằng 0 -> kết thúc trước thằng 6 ( 5)
// thay thế.
console.log(str1.replace("t", "h"));
// console.log(str1.replaceAll("t", "h"));
const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

// console.log(p.replaceAll("dog", "monkey"));
// kiêm tra tồn tạị.

console.log(p.includes("tung"));

// ghép chuỗi
console.log(str1.concat("hehehe"));

// Thực hành. chuẩn hoá name: "nGuyEn ThAC tUNG" => "Nguyen Thac Tung" => gợi ý sử dụng vòng lặp for.
function nomalName(name) {
  name = name.toLowerCase();
  //   console.log("username ", name);
  for (let i = 0; i < name.length; i++) {
    if (i == 0 || name.charAt(i - 1) == " ") {
      // viet hoa
      console.log("slice", name.slice(0, i), "test", name.slice(i + 1));
      name =
        name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
    }
  }
  console.log("username 2", name);
  return name;
}

nomalName("nGuyEn ThAC tUNG");

// baif 11 - 18 . chú ý tất cả đều các bài đều tách thành function có nghĩa. 