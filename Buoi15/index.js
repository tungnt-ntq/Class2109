console.log("hello");
let tagH1 = document.getElementById("idH1");
let tagP = document.getElementsByTagName("p");
let example = document.getElementsByClassName("example");
console.log(example);
tagH1.style.color = "red";
for (let index = 0; index < tagP.length; index++) {
  tagP[index].style.color = "blue";
}
example[1].style.color = "green";

example[1].innerHTML = " <span style='color: blueviolet'>Data span</span>";
example[2].innerText = " <span style='color: blueviolet'>Data span</span>";
