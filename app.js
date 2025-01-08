let inputText = document.querySelector("#inputText");
let list = document.querySelector(".list");

let arr = [];
let deleteAllItem = document.querySelector("#deleteAllItem");

function render() {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li>${arr[i]} 
    <div>
    <button onclick="deleteTask(${i})"><span><i class="fa-solid fa-trash-can"></i></span></button>
    <button onclick="editTask(${i})"><span><i class="fa-regular fa-pen-to-square"></i></span></button>
    </div>
    </li>`;
  }

  // hide Delete All button if array is emtpy
  if (arr.length <= 0) {
    deleteAllItem.style.display = "none";
  }
}

function add() {
  if (inputText.value == "") {
    alert("Value cannot be empty!");
  } else {
    deleteAllItem.style.display = "block";
    arr.push(inputText.value);
    inputText.value = "";
    render();
  }
}

function deleteTask(index) {
  arr.splice(index, 1);
  render();
}

function editTask(index) {
  let editVal = prompt("Please enter the updated value.");
  if (editVal == null || editVal == "") {
    return
  }
  arr.splice(index, 1, editVal);
  render();
}

function deleteAll() {
  deleteAllItem.style.display = "none";
  arr = [];
  list.innerHTML = "";
}
