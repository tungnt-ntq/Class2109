// Array

let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  ["bay", "tam", "chin"],
]; // mảng 2 chiều.
let arr2 = new Array("apple", "orange", "mango");
// console.log(arr);
for (let i = 0; i < arr3.length; i++) {
  const element = arr3[i];
  for (let j = 0; j < element.length; j++) {
    const element2 = element[j];
    // console.log("phần tử thứ", element2);
  }
}
// tập hợp điểm các môn học của các học sinh
let students = [
  [5, 6, 8],
  [5, 6, 8],
  [5, 6, 8],
  [5, 6, 8],
  [5, 6, 8],
  [5, 6, 8],
];
// type của array. => object

// console.log(typeof students);

// index: truy xuất vào 1 phần tử của arr
let arr = [1, 24, 56, 54, 60, 80, 68]; // mảng 1 chiều
//console.log(arr[arr.length - 1]); // độ dài của array : arr.length
// arr[0] = "first";
// console.log(arr);
let str = "ngay hom nay dep";
str[0] = "t";
// console.log(str);
// kiểm tra 1 biến có phải là array hay không? isArray

// console.log(Array.isArray(arr));

// Duyệt qua các phần tử của array. => for, forEach()
// callbackFunction: 1 function được truyền vào function khác như 1 parameter( đối số)
arr.forEach((item, index, array) => {
  // console.log(item);
});
// Array method.
// thêm 1 phẩn tử vào mảng.  sử dụng push: mảng gốc thay đổi, return độ dài mảng.
// let a = arr.push("push");
// let a = arr.concat(["push"]); // sử dụng concat: mảng gốc giữ nguyên, return mảng mới với phần tử đã thêm.
// console.log(arr);

// function push(arr, value) {
//   arr[arr.length] = value;
//   return arr.length;
// }
// console.log(push(arr, "push"), arr);
// xoá phần tử ở cuối mảng.  pop
// let b = arr.pop();
// console.log(arr, b); // mảng ban đầu thay đổi (xoá phần tử cuối) , giá trị trả về chính là phần tử đã xoá
// xoá phần tử đầu tiên. => shift
let c = arr.shift();
console.log(arr, c);
// chen phần tử đầu tiên. => unshift
let d = arr.unshift("first unshift");
console.log(arr, d);
// đảo ngược mảng
arr.reverse();
console.log(arr);
// join tất cả phần tử trong mảng
let joinArr = arr.join(" | ");
console.log(joinArr);
// biến 1 string thành 1 mảng theo  điều kiện.
let splitArr = joinArr.split(" | ");
console.log(splitArr);
let join2 = arr2.join();
console.log(join2.split(","));

// Kiểm tra 1 chuối có phải chuối đảo ngược hay không? => bài 9 .
// Sử dụng kiến thức của string, array để xử lý. => không dùng vòng lặp for.:
// đảo ngược chuỗi rồi so sánh với chuỗi ban đâu.
function isPalindromeString(str) {
  let convertArray = str.split("");
  let reveArr = convertArray.reverse();
  let converString = reveArr.join("");
  if (converString == str) return true;
  return false;
}
// console.log(isPalindromeString("123676321"));

// lấy index, last index

let arr4 = ["tung", "nam", "hao", "cuc", "hao"];
console.log(arr4.lastIndexOf("hao"));

// căt mảng. slice(start, end)
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
console.log(animals.slice(-2));
console.log(animals.slice(1, 3));

// thêm/xoá 1 phẩn tử ở vị trí bất kì. splice(start, delete, item1, item2...) => thay đổi mảng gốc, return trả về array chưua các phần tử đã xoá
const months = ["Jan", "March", "April", "June"];
// months.splice(2, 1);
// months.splice(3, 0, "May");
let returnSplice = months.splice(1, 2, "tung", "nam");
console.log(months, returnSplice);

//  23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 9 => phải dùng cờ để kiểm tra.
// - sắp xếp array đã.
// - lấy ra 1 mảng các phần tử không lặp lại
// - biết từng phần tử xuất hiện bao nhiêu lần
// - So sánh => trả về phần tử xuất hiện nhiều nhất.
let dataTest = [1, 5, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 5];
function checkFrequency(arr) {
  // [1,3,4,5,6], [5,7,3,6,9]
  var a = [];
  var b = [];
  var prev;
  // sắp xếp array.
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element !== prev) {
      a.push(element);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = element;
  }
  let maxB = Math.max(...b);
  let indexMax = b.indexOf(maxB);
  return a[indexMax];
}

console.log(checkFrequency(dataTest));
// [
//   1, 1, 2, 2, 3, 3, 4,
//   4, 5, 5, 6, 6, 7, 7,
//   8, 8, 9, 9, 9
// ]

// a=[1], b = [1] , prev = 1
// a=[1], b = [2] , prev = 1
// a=[1,2], b =[2,1]  , prev = 2
// a=[1,2], b =[2,2]  , prev = 2
// a=[1,2, 3], b =[2,2, 1]  , prev = 2
// console.log(Math.max(...dataTest));
