const addBtn = document.querySelector(".input-field button");
const inputBox = document.querySelector(".input-field input")
const todoList = document.querySelector(".todo-list")
const deleteAllBtn = document.querySelector(".footer button")
const pendingTasksNumb = document.querySelector(".pending-task");
// onkeyup event
inputBox.onkeyup = () => {
  console.log(inputBox.value);
  let userEnteredValue = inputBox.value; //getting user entered value
  if (userEnteredValue.trim() != 0) { //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTask()

addBtn.onclick = () => {
  let listArray;
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if (getLocalStorageData == null) { //if localstorage has no data
    listArray = []; //create a blank array
  } else {
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTask() //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}
function showTask() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if (listArray.length > 0) { //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTask(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = () => {
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if (getLocalStorageData == null) { //if localstorage has no data
    listArray = []; //create a blank array
  } else {
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    listArray = []; //create a blank array
  }
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTask(); //call the showTasks function
}