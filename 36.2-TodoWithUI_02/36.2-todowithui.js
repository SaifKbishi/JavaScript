let todoList = [];
const toDoList = document.querySelector('.toDoList');
const toDoListDiv = document.querySelector('.toDoList');

function ToDo(name){
  this.name = name;
  this.completed = false;
}

function addNewTodoItem(name){
  let todoitem = new ToDo(name);
  todoList.push(todoitem);
  saveDataToLS();
}

//remove item
function removeTodoItem(index){
  todoList.splice(index, 1);
  saveDataToLS();
}
function retrieveTodoItem(index){
  return todoList[index];
}

retrieveDataFromLS();

function printList(){
  let html ='';
  for(let i=0; i< todoList.length; i++){
    //console.log(todoList[i].name);
    let todoitem = todoList[i];
    let name = todoList[i].name;
    let completed = todoList[i].completed;

    //html+=`<span>${name} is ${completed}</span></br>`
    html=`<span>${name} is <span>${(completed===true)? 'done':'not done yet'}</span></span></br>`
  }
  toDoList.insertAdjacentHTML('afterbegin',html);
}
function myGetDate(){
  let today = new Date();
  let dd = today.getDate();
 
  let mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();
  if(dd<10){
   dd=`0${dd}`;
  } 
  if(mm<10){
   mm=`0${mm}`;
  }
  return today = `${dd}/${mm}/${yyyy}`;
 }
/** */
const todoItemDiv = `<div class="todoItemDiv">
<input type="checkbox" class="itemStatus" name="itemStatus">
<input type="text" class="todotext" name="todo" value="" placeholder="type what to do" autofocus>
<input type="button" name="deleteItem" class="deleteItem" data-type="delete" value="X">
<span class='time'>${myGetDate()}</span></div>`;
//toDoListDiv.insertAdjacentHTML('afterbegin', todoItemDiv);//add first item
/** */

const addButtonDiv = document.createElement('div');
addButtonDiv.classList.add('addButtonDiv');
const addButton = document.createElement('button');
addButton.value = 'Add';
addButton.textContent = 'Add';
addButton.classList.add('addButton');
//addButtonDiv.insertAdjacentElement('beforeend',addButton);
//toDoListDiv.insertAdjacentElement('afterend', addButtonDiv);

let todoForm = document.querySelector('#formID');
todoForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let name = document.querySelector('#taskName').value;
  addNewTodoItem(name);
  printList();
});


function saveDataToLS(){
  let dataStr = JSON.stringify(todoList);
  localStorage.setItem('todoList',dataStr);
 }
 function retrieveDataFromLS(){
  let dataStr = localStorage.getItem('todoList');
  todoList = JSON.parse(dataStr);
  if(!todoList){
    todoList = [];
  }
 }