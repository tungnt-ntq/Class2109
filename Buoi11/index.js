var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

// Array: sort, filter, map, reduce
// Object: khai báo, truy xuất, thêm, xoá, cú pháp ngắn gọn, kiểm key, value...
// Trao đổi về npm, yarn.
// Bài kiểm tra về JS: vận dụng kiến thức đã học về array, object để xử lý. => code trên tool : https://replit.com/ => cố gắng trong khoảng 1h xử lý xong
console.log("buỏi 11");
// Sắp xếp trong js
let arr = [9, 7, 1, 5, 6, 3, 10, 11];
//arr.sort(); // chuyển phần từ về string đẻ so sanh chuối
// cách 1
// arr.sort(function (a, b) {
//   if (a > b) return 1; // return số dương thì là sắp xếp tăng dần ( có đổi chỗ hay không ?)
//   if (a < b) return -1; // retun số ấm là sắp xếp giảm dần
// });
// cách 2
// arr.sort((a, b) => b - a);
let khoaHoc = ["java", "PHP", "python", "php", "full stack"];
let sinhViens = ["Hương", "Hà", "Đức", "Thoa"]; // kí tự tiếng việt không có trong bảng mã ASCII
// khoaHoc.sort((a, b) => {
//   let x = a.toLowerCase();
//   let y = b.toLowerCase();
//   return x == y ? 0 : x > y ? 1 : -1;
// });
sinhViens.sort((a, b) => {
  return a.localeCompare(b);
});

let sinhVien2 = [
  { ten: "Ngọc Anh", tuoi: 18, diemXacSuat: 3 },
  { ten: "Hương", tuoi: 20, diemXacSuat: 2 },
  { ten: "Hà", tuoi: 21, diemXacSuat: 1 },
  { ten: "Thoa", tuoi: 25, diemXacSuat: 4 },
];
sinhVien2.sort((sv1, sv2) => {
  return sv2.tuoi - sv1.tuoi;
});
// console.log(sinhVien2);

// map => biến đổi 1 phần tử thành phần tử khác mà không thay đổi độ dài array

let newArray = arr.map((value, index) => {
  return value * 2 + "tung" + index;
}); // tạo ra 1 mảng mới mà không thay đổi mảng ban đầu. => biên các phần tử của mảng mới theo giá trị return
// console.log(newArray);

//  filter => tìm kiếm tạo ra 1 mảng mới mà không thay đổi mảng ban đầu. => trả về 1 mảng các giá trị thoả mãn mãn điềm kiện của return
let filterArray = arr.filter((item, index) => {
  return item >= 10;
});
let arr2 = [9, 7, 1, 5, 6, 3, 10, 11];
//  find => tìm kiếm tạo ra 1 giá tri mới mà không thay đổi mảng ban đầu. => trả về 1 giá trị đầu tiên thoả mãn điều kiện return
let findArray = arr2.find((item, index) => {
  return item >= 5;
});

// reduce: tính toán trả về số
const array1 = [1, 2, 3, 4];
//  reduce : nhận vào 2 tham số. callback function , init value

let sumArray = array1.reduce((a, b) => {
  return a + b;
}, 0);
//  vòng 1: a = 0 , b = 1 => return 1
//  2: a = 1, b = 2 => return 3
// 3: a = 3: b= 3 => return 6:
// 4: a = 6: b = 4 => return 10
console.log(sumArray);

// Object
// Khai báo object.
let car = {
  color: "red",
  price: "5000$",
};
// Hàm khởi tạo đối tượng
function Car(color, price) {
  this.color = color;
  this.price = price;
}
let newCar = new Car("blue", "1000");
// C3: static method

const horse = Object.create({});
// console.log(newCar);
// truy xuất giá trị của object
console.log(car.price);
console.log(car["color"]);
// thay đổi giá trị của object
car.price = "20.000$";
console.log(car);
// thêm mới thuộc tính cho object
car.newProperty = "new";
// xoá thuộc tính
delete car.newProperty;
console.log(car);
// kiểm tra thuộc tính có trong object hay không
// console.log(car.hasOwnProperty("name"));

// so sánh 2 object và clone object
let a = { name: "tung" };
let b = a;
console.log(a == b); // 2 object giá trị giống nhau luôn trả về false, chỉ trả về true khi là chính nó.
b.name = "change name";

console.log(a.name);
// để clone biến object thành string rồi biến lại thành object
let c = JSON.parse(JSON.stringify(a));
c.name = "c đã change name";
console.log(a);
const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5,
  },
  {
    name: "dog",
    size: "small",
    weight: 10,
  },
  {
    name: "lion",
    size: "medium",
    weight: 150,
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000,
  },
];
//  tạo ra mảng mới chỉ chứa tên các con vật.
let newAnimalName = animals.map((item, index) => {
  return item.name;
});
// tạo ra 1 mảng chưa các con vật nhỏ
let smallAnimal = animals.filter((item) => item.size === "small");
// tính tổng cân nặng của các con vật .
let sumWeight = animals.reduce((a, b) => {
  return (a = a + b.weight);
}, 0);
//  0.weight + item1.weight
console.log(sumWeight);
// BÀi kiểm tra 
// 1.Show all student
// 2.Create student and return Menu
// 3.Delete student
// 4.Edit student
// 5.Find student by name
// 6.Sort student by name ascending 
// 7.Sort student by age ascending 
// 8.Exit