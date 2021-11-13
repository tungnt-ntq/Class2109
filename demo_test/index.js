var p = document.getElementsByTagName("p")[0];
var fname = document.getElementById("fname");
var body = document.getElementsByTagName("body");
var parent = document.getElementById("demo");
var child = document.getElementsByClassName("p2");
console.log("first", parent.firstChild);
p.style.color = "blue";
console.log(p);
p.innerHTML = "change p";
console.log(fname);
// fname.setAttribute("value", "du lieu data thay doi");
fname.name = "hoang";
p.onclick = () => {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "click";
  document.body.appendChild(btn);
  btn.onclick = function () {
    // parent.removeChild(child);
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
  };
};
function myFunction() {
  console.log(parent.childNodes);
  let item = document.getElementById("p2");
  var btn2 = document.createElement("BUTTON");
  btn2.innerHTML = "add";
  parent.replaceChild(btn2, item);
  //   parent.removeChild(item);
  //   parent.replaceChild()
  //   console.log(parent.childNodes);
}
var lname = document.querySelectorAll("input.example");
for (i = 0; i < lname.length; i++) {
  lname[i].style.border = "solid 1px red";
}
console.log("querey", lname);
