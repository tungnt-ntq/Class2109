console.log("hello");
// zsh
// nấu cơm

// Bước 1: Lấy gạo ra khỏi bao
// Bước 2 : Vo gạo
// Bước 3 : Tìm ổ cắm và cắm cơm.
// Tạo thành 3 function.
// Func1: mất 2s để xử lý. out 'Đã lấy gạo xong'
// Func2: mất 4s để xử lý. input: text của func1, out 'Gao đã sạch'
// Func3: Done.

// Promise => Cách thứ 2 để xử lý bất đồng bộ.
// Xử lý bài toàn diện tích hình thang.
// là 1 object : Hiện tại chưa tồn tại
// Được xử lý và có giá trị vào 1 thời gian nào đó trong tương lai

// Phép công; return promise
let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject("Lỗi phép cộng: Bạn phải nhập số");
      }
      return resolve(a + b);
    }, 2000);
  });
};

// Phép nhân; return promise
let multiplication = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new Error("Lỗi phép nhân: Bạn phải nhập số"));
      }
      return resolve(a * b);
    }, 1000);
  });
};

//Phép chia; return promis
let devide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != "number" || typeof b != "number") {
        return reject("Lỗi phép chia: Bạn phải nhập số");
      } else if (b == 0) {
        return reject("Lỗi phép chia: Không thể chia cho 0");
      }
      return resolve(a / b);
    }, 1000);
  });
};

let trapezoidal = (a, b, h, c, d) => {
  console.log("sum", sum(a, b));
  return sum(a, b)
    .then((resolve) => multiplication(resolve, h))
    .then((resolve) => devide(resolve, 2))
    .then((resolve) => sum(resolve, c))
    .then((resolve) => multiplication(resolve, d));
};

trapezoidal(2, 7, 9, 1, 9)
  .then((resolve) => console.log("result: ", resolve))
  .catch((reject) => console.log("Lỗi", reject));

// sum(5, "tung")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
