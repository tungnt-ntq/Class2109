// Buỏi 12
// NPM và yarn.
// Chưa bài cũ Quản lý sinh viên.

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
const shortid = require("shortid");
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
  console.log(" 8.Delete all student");
  console.log(" 9. Sum student age");
  console.log(" 10.Exit");
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
    id: shortid.generate(),
    name: name,
    age: age,
    sex: sexIndex[sex],
  });
  saveFile();
  choise = 0;
}
function deleteStudent() {
  let nameDel = readlineSync.question("What name do you want delete ? ");
  // C1
  //   let newArrStudent = student.filter((item) => {
  //     return item.name !== nameDel;
  //   });
  //   student = newArrStudent;

  let indexDel = student.findIndex((item) => {
    return item.name === nameDel;
  });
  student.splice(indexDel, 1);
  saveFile();
  choise = 0;
}
function editStudent() {
  let nameEdit = readlineSync.question("What name do you want edit ? ");
  let indexEdit = student.findIndex((item) => {
    return item.name === nameEdit;
  });
  // giả định name là require không được phép sửa.
  let oldName = student[indexEdit].name;
  let newAge = parseInt(readlineSync.question("age?"));
  let sex = readlineSync.keyInSelect(sexIndex, "sex? male/female: 0/1");
  let newStudent = {
    name: oldName,
    age: newAge,
    sex: sexIndex[sex],
  };
  student.splice(indexEdit, 1, newStudent);
  saveFile();
  choise = 0;
}
function findStudent() {
  let nameFind = readlineSync
    .question("What name do you want find ? ")
    .toLowerCase();
  let listStudentFind = student.filter((item) => {
    return item.name.toLowerCase() === nameFind;
  });
  console.log(listStudentFind);
  saveFile();
  choise = 0;
}
function sortByAge() {
  student.sort((a, b) => a.age - b.age);
  console.log(student);
  saveFile();
  choise = 0;
}
function sortByNameStudent() {
  student.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  console.log(student);
  saveFile();
  choise = 0;
}
function deleteAllStudent() {
  student = [];
  saveFile();
  choise = 0;
}
function sumStudentAge() {
  let sum = student.reduce((a, b) => {
    return (a = a + b.age);
  }, 0);
  console.log("Sum student: ", sum);
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
    case 3:
      deleteStudent();
      break;
    case 4:
      editStudent();
      break;
    case 5:
      findStudent();
      break;
    case 6:
      sortByNameStudent();
      break;
    case 7:
      sortByAge();
      break;
    case 8:
      deleteAllStudent();
      break;
    case 9:
      sumStudentAge();
      break;
    case 10:
      process.exit();
      break;
    default:
      console.log("Ban phai chọn 1 số trong menu");
      choise = 0;
      break;
  }
}
