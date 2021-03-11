const readlineSync = require('readline-sync');
const todoList = [];
let idCounter = 1;

function addItem(){
 let itemName = readlineSync.question('\nPlease enter Todo name: ');
 if(itemName.length >0){
  let newItem = {
   id : idCounter,
   name : itemName,
   isCompleted : false,
  }
  idCounter++;
  todoList.push(newItem);
  console.log('item added');
  return true;
 }else{
  console.log('item was not added');
  return false;
 }

 
}//addItem

function printTodoList(array){
 array.forEach(item => {
  console.log(`${item.id} ${item.name} | ${item.isCompleted}`);
 });
}

function deleteItem(array, id){ 
 if(array.find(item => item.id === id)){
  array.splice(array.indexOf(id), 1);
  console.log('found and deleted');
  return true;
 }else{
  console.log('deleteItem: not found');
 }
}//deleteItem

function markAsDone(array, id){ 
 array.find(item => {
  if(item.id === id){
   item.isCompleted = true;
   console.log('found and marked as done');
  }else{
   console.log('markAsDone: not found');
  }
 });
}//markAsDone

function unMarkAsDone(array, id){ 
 array.find(item => {
  if(item.id === id && item.isCompleted === true){
   item.isCompleted = false;
   console.log('found and UNmarked as done');
  }else if(item.id === id && item.isCompleted === false){
   console.log('found, but it is still not doen yet');
  }else{
   console.log('unMarkAsDone: not found');
  }
 });
}//unMarkAsDone

function listAll(array){
//need to sort them by done / not done
}//listAll



addItem();
//addItem();
//addItem();
//addItem();
//printTodoList(todoList);
console.log('');
//deleteItem(todoList, 2);
//deleteItem(todoList, 5);
markAsDone(todoList, 2);
//printTodoList(todoList);
unMarkAsDone(todoList, 3);//not done
//unMarkAsDone(todoList, 2);
printTodoList(todoList);// all not done

//cd bootcamp\BC_exercises\js
//node 36.1-nodetodo.js



module.exports = addItem, markAsDone, printTodoList, deleteItem, unMarkAsDone