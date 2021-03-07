let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");
let del = document.querySelector("#deleteAll");
let uls = document.getElementsByTagName("ul");
let li = document.createElement("li");

btn.addEventListener("click", function again() {
  let text = input.value;
  if (text == "") {
    alert("Please Add Task!");
  } else {
    li = document.createElement("li");
    li.innerHTML = text;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
  }
});

list.onclick = function (e) {
  if (e.target.tagName == "LI") {
    if (e.target.classList.toggle("checked")) {
      e.target.remove();
    }
  }
};

del.onclick = function removes() {
  document.getElementById("list").innerHTML = "";
};
