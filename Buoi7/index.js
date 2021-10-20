console.log("Hello world");
// alert là chức năng của chrome hỗ trợ nên node local không hoạt động
// alert("thông báo cho người dùng");

// Cách khai báo biến trong JS : var, let, const( hằng số)
var a;
a = 20;
var a = 60;
const b = 30;
// b = 50;

let c;
c = 50;
// let c = 80;
// console.log(c);
// tạo ra 1 ô nhớ: ô nhớ đấy đặt tên a => vứt 1 giá trị = 10 vào ô nhớ đấy.

// Cac kiểu dữ liệu trong JS ( number, boolean, string, symbol, object, function, undefine)
// dễ học, khó để control, deep learning
let d = 15.89;
let isSex = false;
let text = `tot ${d} lam`; // cạnh số 1 => dùng khi muốn nhét 1 biến khác vào giữa biến string "" ''
let str1 = "tung";
let str2 = "mai";
let total = `${str1}    ${d}     ${str2}`;
let testSymble = Symbol("test");
// console.log(typeof testSymble);
// console.log(total);

// đối tượng.
let car = {
  color: "red",
  price: "7000000000$",
  roadster: false, // mui trần ?
};

let product = {
  price: 12000,
  place: "Ha nội",
  category: "iphone",
};

let fun = () => {};
console.log(typeof fun);

// undefine // null

let test1 = null;
test1 = 12;
console.log(test1);

// Cách đặt tên biến.
// ngoại trừ rule cơ bản:
// - Đặt tên biến rõ nghĩa
// - Sử dụng tiếng anh
// -  GetProduct, getProduct, get_product : => getProduct: camelCase,
// - hằng sô: đặt viết hoa hết.
// const WIDTH = 500;
let strTest = "tung";
let beforeString = "string bắt đâu";
beforeString = 12;
beforeString = "12";
let afterString = 22 - beforeString;
let checkString = beforeString - strTest;
// NaN
console.log(typeof checkString);

// Các lệnh và biểu thức cơ bản trong JS
// Phép toán cơ bản   + - * / % (chia có dư)
// Phép so sanh cơ bản: > < == (so sanh value) >= <=, === (so sanh kiểu dữ liệu + value), != (khác), !==, && (và) , || ( hoặc ) => return true/false
let co1 = "11";
let co2 = 10;
console.log(co1 !== co2);
// Câu lệnh điều kiện: => nếu thì

let peoplePrice = 999000;
if (peoplePrice >= 1000000) {
  console.log("oa người giàu");
} else {
}

let gpaScore = 5;
if (gpaScore < 5) {
  console.log("học sinh kém");
} else if (gpaScore >= 5 && gpaScore < 8) {
  console.log("học trung bình");
} else {
  console.log("học sinh giỏi");
}
// nếu gpaScore < 5 in ra học sinh kém, > 5, <8 học sinh trung bình, >=8  học sinh giỏi.

let isHasValue = null; // !15 => false => !false  => true
// nếu điệu triện trả về true/false  => thì ! có nghĩa là ngược lại
// !! : converse giá trị về kiẻu boolean .

if (!isHasValue) {
  console.log("co giá trị", !!isHasValue);
} else {
  console.log(!!isHasValue);
}

if (gpaScore == 0) {
  console.log(gpaScore);
}
if (gpaScore == 1) {
  console.log(gpaScore);
}
if (gpaScore == 2) {
  console.log(gpaScore);
}
if (gpaScore == 3) {
  console.log(gpaScore);
}
if (gpaScore == 4) {
  console.log(gpaScore);
}
if (gpaScore == 5) {
  //   console.log(gpaScore + "hêt");
}

//  =>không viết if else: nếu quá 3 điều kiện.
switch (gpaScore) {
  case 1:
    console.log(gpaScore + "1");
    break;
  case 2:
    console.log(gpaScore + "2");
    break;
  case 5:
    console.log(gpaScore + "3");
    break;
  case 6:
    console.log(gpaScore + "4");
    break;
  default:
    console.log(gpaScore + "5");
    break;
}

// vòng lặp:
//  in ra màn hình log 1, 2, 3, 4,5
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// 0,1,2,3
for (let index = 0; index < 4; index++) {
  console.log(index + 1);
}
// bài tập về nhà:
// bài 1:  Giải phương trình bậc 2 ax^2 + bx + c = 0
// input a ,b , b  => in ra màn hình giá trị của x
// bài 2: Tìm 1 số a có phải là số nguyên tố hay không?
