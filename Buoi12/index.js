// Buỏi 12
// NPM và yarn.
// Chưa bài cũ Quản lý sinh viên.
// Class trong JS.
// Bổ sung kiến thức về OBject key, value, ...

// 1. npm.

// BÀi kiểm tra
// 1.Show all student
// 2.Create student and return Menu
// 3.Delete student
// 4.Edit student
// 5.Find student by name
// 6.Sort student by name ascending
// 7.Sort student by age ascending
// 8.Exit
var readlineSync = require("readline-sync");
var fs = require("fs");

var showMenu = function () {
  console.log("               Student Managerment                  ");
  console.log("====================================================");
  console.log(" 1. Show all student ");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending");
  console.log(" 7.Sort student by age ascending");
  console.log(" 8.Exit");
};

showMenu();
var studentStr = "";
var choise = readlineSync.question("Your choise? ");
let studentFile = fs.readFileSync("./dataJson.txt", "utf8", (err, data) => {
  if (err) {
    console.log("err ", err);
    return;
  }
});
let student = JSON.parse(studentFile);
let sexIndex = ["male", "female", ":)) "];

function saveFile() {
  studentStr = JSON.stringify(student);
  fs.writeFileSync("./dataJson.txt", studentStr, "utf8");
}
function createStudent() {
  let name = readlineSync.question("name?");
  let age = parseInt(readlineSync.question("age?"));
  let sex = readlineSync.keyInSelect(sexIndex, "sex? male/female: 0/1");
  student.push({
    name: name,
    age: age,
    sex: sexIndex[sex],
  });
  saveFile();
  choise = 0;
}
while (true) {
  switch (parseInt(choise)) {
    case 0:
      showMenu();
      choise = readlineSync.question("Your choise? ");
      break;
    case 1:
      console.log(student);
      choise = 0;
      break;
    case 2:
      createStudent();
      break;
    default:
      break;
  }
}
