console.log('todo working');
class toDoItem{
 static id = 1000;
 constructor(context, isCompleted, creationTime) {
  this.id = toDoItem.id++;
  this.context = context;
  this.isCompleted = false;
  this.creationTime = myGetDate();
 }
 getID(){
  return this.id;
 }
 getContext(){
  return this.context;
 }
 setContext(text){
  this.context = text;
 }
 getStatus(){
  return this.isCompleted;
 }
 setStatus(status){
  this.isCompleted = status;
  //this should invoke reorder by status function
 }
 getCreationTime(){
  return this.creationTime;
 }
}//toDoItem

class toDoList{
 static count = 1;
 constructor(name){
  this.id = toDoList.count++;
  this.name = name;
  this.todoItemsList = [];
 }
 getName(){
  return this.name;
 }
 getToDoList(){
  return this.todoItemsList;
 }
 addItem(newItem){
  this.getToDoList().push(newItem);
 }
 printList(){
  if(this.todoItemsList.length > 0){
   //console.log(`length: ${this.todoItemsList.length}`);
   this.todoItemsList.forEach(element =>{
    console.log(element.context);
   });
  }  
 }
 completedSort(){
  if(this.todoItemsList.length > 0){
   this.todoItemsList.forEach(element =>{
    console.log(`this should be sorting ${element}`);
   });
  }
 }

}//class toDoList



/* let newList01 = new toDoList('firstList');
let todo01 = new toDoItem('call mama' );
let todo02 = new toDoItem('call papa' );
newList01.addItem(todo01);
newList01.addItem(todo02); */
//newList01.printList();

//cd bootcamp\BC_exercises\js\36.2-TodoWithUI
//node 36.2-todowithui.js

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

/**HTML */
const toDoListDiv = document.querySelector('.toDoList');

const todoItemDiv = `<div class="todoItemDiv">
<input type="checkbox" class="itemStatus" name="itemStatus" value="" >
<input type="text" class="todotext" name="todo" value="" placeholder="type what to do" autofocus>
<input type="button" name="deleteItem" class="deleteItem" data-type="delete" value="X">
<span class='time'>${myGetDate()}</span></div>`;

toDoListDiv.insertAdjacentHTML('afterbegin', todoItemDiv);

const addButtonDiv = document.createElement('div');
addButtonDiv.classList.add('addButtonDiv');
const addButton = document.createElement('button');
addButton.value = 'Add';
addButton.textContent = 'Add';
addButton.classList.add('addButton');
addButtonDiv.insertAdjacentElement('beforeend',addButton);
toDoListDiv.insertAdjacentElement('afterend', addButtonDiv);


let newList01 = new toDoList('firstList'); //create a new list
addButton.addEventListener('click', (e)=>{// Event Listener to the ADD button
 
 let temp_todo = new toDoItem(); // create a new to do task
 //let textValue = document.querySelector('.todo').value;
 let textValue =e.target.parentNode.previousSibling.lastElementChild.children[1].value;
 console.log('textValue.length', textValue.length);
 if(textValue.length>0){
  //if(e.target.parentNode.previousSibling.lastElementChild.children[1].value>0){
   temp_todo.setContext(textValue);
  //let statusCheckbox= document.querySelector('.itemStatus').value;
  let statusCheckbox=e.target.parentNode.previousSibling.lastElementChild.children[0].value
  temp_todo.setStatus(statusCheckbox);
  newList01.addItem(temp_todo); 
  console.log('printing list');
  newList01.printList();
  //console.log(e.target.parentNode.previousSibling.lastElementChild.children[1].value);
     
  //on click add new item 
  toDoListDiv.insertAdjacentHTML('beforeend', todoItemDiv);  
  let ntodoItemDiv = document.querySelectorAll('.todoItemDiv');
  let itemStatus = document.querySelector('.itemStatus');
  itemStatus.addEventListener('change', updateIsCompleteStatus(e));
  /*let todotext = document.querySelector('todotext');
  todotext.addEventListener('click', enableEdit);*/
  let deleteItem = document.querySelector('.deleteItem');
  deleteItem.addEventListener('click', deleteTask(e));

  function updateIsCompleteStatus(e){
   console.log('checkbox is checked index');
  }
  function enableEdit(){
   console.log('editing');
  }
  function deleteTask(e){
   console.log('delete btn e.target.parentNode: ',e.target.parentNode);
  }

  for(let i=0; i< ntodoItemDiv.length; i++){
   //ntodoItemDiv[i].removeEventListener('click',editATodoTask);
   //ntodoItemDiv[i].addEventListener('click',editATodoTask);
   console.log('ntodoItemDiv[i].firstElementChild: ',ntodoItemDiv[i].firstElementChild);
   ntodoItemDiv[i].firstElementChild.removeEventListener('change', updateIsCompleteStatus());
  }
  for(let i=0; i< ntodoItemDiv.length; i++){
   //ntodoItemDiv[i].removeEventListener('click',editATodoTask);
   //ntodoItemDiv[i].addEventListener('click',editATodoTask);
   console.log('ntodoItemDiv[i].firstElementChild: ',ntodoItemDiv[i].firstElementChild);
   ntodoItemDiv[i].firstElementChild.addEventListener('change', updateIsCompleteStatus(e));
  }

  function editATodoTask(){
   console.log('edit to do taks');
  }

 }//if(textValue.length>0) 
});// Event Listener to the add button
