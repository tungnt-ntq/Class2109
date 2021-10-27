// vòng lặp.
// vòng lặp vô hạn.
// array: ơ
// for (let index = 10; index < 10; index++) {}
// in ra log 10 lần

// let begin = 0;
// while (begin < 10) {
//   console.log("counter", begin);
//   begin++;
// }
// làm trước rồi mới so sánh

// luôn lặp tối thiểu 1 lần
// let checkDo = 20;
// do {
//   console.log(checkDo);
//   checkDo++;
// } while (checkDo < 10);

// nhập 1 ký tự. Nếu kí tự đó không phải là số thì bắt nhập lại
// typeof (Number("tung")) => NaN
// do {
//   var inputValidate = prompt("Enter number");
//   console.log(Number(inputValidate));
// } while (isNaN(inputValidate)); // convert text input từ string  => number
// console.log("number", inputValidate);
// nhập ký tự
// check điều kiện nó không phải dạng số thì bắt nhập lại
// dùng typeof để kiểu tra kiểu dữ liệu xem phải là số hay không?
// kí tự nhập thông qua prompt luôn luôn là string
// sử dung Number để convert dữ liệu.
// Khi convers string Number("tung") => number
// thoát khỏi vòng lặp break
// nhập số và tính tổng các số đã nhập .
// Nếu không nhập số thì hiển thị tổng
// let sum = 0;
// while (true) {
//   let value = +prompt("Enter number");
//   if (!value) break;
//   sum += value;
// }
// alert(sum);

// thoát khỏi lần lặp hiện tại continue
// log ra các số lẻ (số lần lặp giảm 1 nửa)
// for (let index = 0; index < 10; index++) {
//   if (index % 2 === 0) continue;
//   console.log(index);
// }

// chưa bài tím số nguyên tố.: là số lớn hơn 1, chia hết cho 1 và chính nó;
// let flag = true;
// let n = 998; // chạy 1 vòng lặp
// if (n < 2) {
//   flag = false;
// } else {
//   // dùng vòng lặp for. từ 2 -> n-1 ( )
//   for (let index = 2; index < n - 1; index++) {
//     console.log("lằn lặp");
//     if (n % index === 0) {
//       flag = false;
//       break;
//     }
//   }
// }
// if (flag == true) {
//   console.log("n là số nguyên tố");
// } else {
//   console.log("không phải số nguyên tố");
// }

// Cách 2 :
// 
function checkPrime(n) {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else if (n === 2) {
    flag = true;
  } else if (n % 2 === 0) {
    flag = false;
  } else {
    for (let index = 3; index <= n / 2; index += 2) {
      if (n % index === 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
if (checkPrime(97) == true) {
  console.log("n là số nguyên tố");
} else {
  console.log("không phải số nguyên tố");
}

// độ phức tạp của thuật toán:  số lần lặp giảm 1 nửa.
// code phải chay rồi mới tối ưu.
// test case

//  8p : Viết lại bài tím số nguyên tố. => tối ưu hết mức có thể.

// btvn: Từ bài số 4 -> 10:
