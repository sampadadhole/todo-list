//selectors
const inputBox = document.querySelector(".add-text");
const todoItem = document.querySelector(".todo-item");
const listItem = document.querySelector(".list-item");
const todoList = document.querySelector(".todo");
const delList = document.querySelector(".svg-delete");
//EventListener
document.addEventListener("DOMContentLoaded", getTodos);
inputBox.addEventListener("keypress",Addtask);
todoList.addEventListener("click", Deleteitem);
todoList.addEventListener("click", Edititem);
//functions
function Addtask(e){
  if(e.key==="Enter"){
    //creating list-item li
    const toItemdiv = document.createElement("li");
    toItemdiv.classList.add("list-item");
    //creating p tag
    const toItemLi = document.createElement("p");
    toItemLi.classList.add("todo-item");
    toItemLi.innerText=inputBox.value;
    Localstorage(inputBox.value);
    // console.log(inputBox.value);
    //append todo-item to list-item
    toItemdiv.appendChild(toItemLi);
    //create delete img tag
    const deleteImg = document.createElement("img");
    deleteImg.classList.add("svg-delete");
    deleteImg.src="./assets/icons/delete.svg";
    //append delete img to list-item
    toItemdiv.appendChild(deleteImg);
    //create edit img tag
    const editImg = document.createElement("img");
    editImg.classList.add("svg-edit");
    editImg.src="./assets/icons/edit.svg";
    //append edit img to list-item
    toItemdiv.appendChild(editImg);
    //append final div
    todoList.appendChild(toItemdiv);
    //to clear input
    inputBox.value="";
    e.preventDefault();

  }
}

function Deleteitem(e){
  const item = e.target;
  if(item.classList[0]==="svg-delete")
  {
    const task = e.target.parentElement;
    task.remove();
  }
}
function Edititem(e){
  const item=e.target;
  if(item.classList[0]==="svg-edit")
  {
    const task = e.target.parentElement;
    // console.log(item.parentElement.textContent);
    inputBox.value=task.textContent;
    task.remove();
    
  }
}

function Localstorage(todo){

//check if any todo exists
let todos;
if(localStorage.getItem("todos")=== null)
{
  todos=[];
}else{
    todos =JSON.parse(localStorage.getItem("todos"));
}
todos.push(todo);
localStorage.setItem("todos",JSON.stringify(todos));

}

function getTodos(todo){

  let todos;
if(localStorage.getItem("todos")=== null)
{
  todos=[];
}else{
    todos =JSON.parse(localStorage.getItem("todos"));
}
// todos.push(todo);
// localStorage.setItem("todos",JSON.stringify(todos));

  todos.forEach(todo => {
    //creating list-item li
    const toItemdiv = document.createElement("li");
    toItemdiv.classList.add("list-item");
    //creating p tag
    const toItemLi = document.createElement("p");
    toItemLi.classList.add("todo-item");
    toItemLi.innerText=todo;
    //append todo-item to list-item
    toItemdiv.appendChild(toItemLi);
    inputBox.value="";
    //create delete img tag
    const deleteImg = document.createElement("img");
    deleteImg.classList.add("svg-delete");
    deleteImg.src="./assets/icons/delete.svg";
    //append delete img to list-item
    toItemdiv.appendChild(deleteImg);
    //create edit img tag
    const editImg = document.createElement("img");
    editImg.classList.add("svg-edit");
    editImg.src="./assets/icons/edit.svg";
    //append edit img to list-item
    toItemdiv.appendChild(editImg);
    //append final div
    todoList.appendChild(toItemdiv);
   
 });
}