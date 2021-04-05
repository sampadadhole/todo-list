const inputBox = document.querySelector(".add-text");
const addedList = document.querySelector(".added-list");
const elDiv = document.createElement("div");
elDiv.className = "added-list";
let count = 1;

let items = [{id: 0, data: 'Groceries Shopping'}, {id: 1, data: 'Shopping and Movies'}];



inputBox.addEventListener("keypress", addItem);

function addItem (e) {
  if (e.key === "Enter") {
    count++;
          items.push({id: count, data: e.target.value});
          console.log(items);
    addedList.innerHTML += `<li>
            <h3>${e.target.value}</h3>
            <div><img class="svg-delete" src="./assets/icons/delete.svg"></img>
            <img class="svg-edit" src="./assets/icons/edit.svg"></img></div>
            </li>`; 
    e.preventDefault();
    inputBox.value = "";
    
  }
}
