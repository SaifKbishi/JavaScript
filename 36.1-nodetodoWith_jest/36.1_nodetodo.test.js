const { TestScheduler } = require('@jest/core');
const {addItem, markAsDone, printTodoList, deleteItem, unMarkAsDone} = require('./36.1_nodetodo');


test('type in a real string for a name', ()=>{
 expect(addItem()).toBe(true)
})

test('mark a task as done succussfully', ()=>{
 expect(markAsDone()).toBe(true)
})

test('print the whole list to do with no errors', ()=>{
 expect(printTodoList()).toBe(true)
})

test('delete an item succussfully', ()=>{
 expect(deleteItem()).toBe(true)
})

test('mark a task as UNdone succussfully', ()=>{
 expect(unMarkAsDone()).toBe(true)
})




//cd bootcamp\BC_exercises\js\36.1-nodetodoWith_jest
//36.1_nodetodo.test.js