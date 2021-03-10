console.log('todo working');
class toDoItem{
 static id = 1000;
 constructor(context) {
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
    console.log(`Name: ${element.context}, Status: ${element.isCompleted}, Creation date: ${element.creationTime}`);
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
<input type="checkbox" class="itemStatus" name="itemStatus">
<input type="text" class="todotext" name="todo" value="" placeholder="type what to do" autofocus>
<input type="button" name="deleteItem" class="deleteItem" data-type="delete" value="X">
<span class='time'>${myGetDate()}</span></div>`;

toDoListDiv.insertAdjacentHTML('afterbegin', todoItemDiv);//add first item

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
 let textValue =e.target.parentNode.previousSibling.lastElementChild.children[1].value;
 console.log('textValue.length', textValue.length);
 if(textValue.length>0){
  temp_todo.setContext(textValue);
  let statusCheckbox=e.target.parentNode.previousSibling.lastElementChild.children[0].value;
  temp_todo.setStatus(statusCheckbox);
  newList01.addItem(temp_todo);
  //on click add new item 
  toDoListDiv.insertAdjacentHTML('beforeend', todoItemDiv);  
 }//if(textValue.length>0) 
 let lastAddedTask =e.target.parentNode.previousSibling.lastElementChild;
 console.log('lastAddedTask01: ',lastAddedTask);
 //addEventListenersToTheToDoItems(lastAddedTask);
 addEventListenersToTheToDoItems(lastAddedTask);
});// Event Listener to the add button

//add event listeners to the elements on the created toDoListDiv
function addEventListenersToTheToDoItems(lastTask){
 console.log('lastTask 132', lastTask);
 //let lastTask =e.target.parentNode.previousSibling.lastElementChild;
 let textValue = lastTask.previousElementSibling.children[1].value;
 
 console.log('textValue.length', textValue.length);
 if(textValue.length>0){
  let old_todoItemDiv = document.querySelector('.todoItemDiv');
  let new_todoItemDiv = old_todoItemDiv.cloneNode(true);
  old_todoItemDiv.parentNode.replaceChild(new_todoItemDiv, old_todoItemDiv);

  let itemStatus = document.querySelectorAll('.itemStatus');
  for(let i=0; i<itemStatus.length; i++){
   itemStatus[i].addEventListener('change', (e)=>{
    if(e.target && e.target.classList.contains('itemStatus')){
     console.log('checkbox value',e.target);
     console.log('checkbox value',e.target.value);
     if(e.target.value === true){
      e.target.value = false
     }else if(e.target.value === false){
      e.target.value = true;
     }    
    }   
   });
  }
  //console.log(itemStatus);
  let todotext = document.querySelector('.todotext');
  let deleteItem = document.querySelector('.deleteItem');
  //itemStatus.addEventListener('change', updateIsCompleteStatus(eStatus));
/*   itemStatus.addEventListener('change', (e)=>{
   if(e.target && e.target.classList.contains('itemStatus')){
    console.log('checkbox value',e.target);
    console.log('checkbox value',e.target.value);
    if(e.target.value === true){
     e.target.value = false
    }else{
     e.target.value = true;
    }    
   }   
  }); */
  todotext.addEventListener('click', (e)=>{
   console.log(e.target);
  });
  deleteItem.addEventListener('click', (e)=>{
   console.log(e.target);
  });

 }

}//addEventListenersToTheToDoItems


function updateIsCompleteStatus(e){
 console.log('checkbox is checked index');
}
function enableEdit(e){
 console.log('editing');
}
function deleteTask(e){
 console.log('delete btn e.target.parentNode: ',e.target.parentNode);
}

function saveDataToLS(){
 let dataStr = JSON.stringify(newList01);
 localStorage.setItem('newList01',dataStr);
}
function retrieveDataFromLS(){
 let dataStr = localStorage.getItem('newList01');
 newList01 = JSON.parse(dataStr);
 if(!newList01){
  newList01 = [];
 }
}