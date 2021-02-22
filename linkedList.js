//stack & queue
class Node{
 constructor(element) 
 { 
  this.element = element; //element holds the data of a node 
  this.next = null; // next holds the pointer to the next node, which is initialized to the null value.
 } 
} 
class LinkedList {
 constructor(){
   this.head = null; //head stores the first node of a List
   this.size =0; //size indicates the number of nodes in a list.
 }

 isEmpty(){
  console.log('not empty');
  return this.size === 0;
 }

 addLast(element){
  //debugger;
  let node = new Node(element);// creates a new node 
  let current;

  if(this.head == null){
   this.head = node;
  }else{
   current = this.head;
   while(current.next){
    current = current.next;
   }
   current.next = node;
  }
  this.size++;
 }

 getFirst(){
   return this.head.element;
 }

 getLast(){
  let current;
   current = this.head;
   while(current.next){
    current = current.next;
   }
   return node= current.element;
 }

 reverse(){    //reverse list
  //debugger;
  let current = this.head;
  let prev = null;
  let next = null;

  while(current != null){
   next = current.next;
   current.next = prev;
   prev = current;
   current = next;
  }
  //this.head = next;
  this.head = prev;
 }//reverse

 draw(){//draw the linked list in console 1->2->3-> ...null
  let current = this.head;
  let str = '';
  while(current){
   str += current.element + ' -> ';
   current = current.next;
  }
  console.log(str);
 }

 removeKNode(index){//remove the K-th Node in linked list
  //debugger;
 if(index > 0 &&  index > this.size){ //if index is out of range
  return;  
 }
 let current, previous;
 
 current = this.head; //set current to first   /*******-----VERY-----IMPORTANT------************/
 let count = 0;
 while(count < index){  
  count++;
  previous = current; //Node before the index
  current = current.next; // Node after the index
 }

 previous.next = current.next;
 this.size--;
 }
 
 circularLinkedList(){//given a linked list, return if it includes a loop
  let slow_p, fast_p;  
  slow_p = this.head;
  fast_p = this.head;
  while(slow_p != null &  fast_p !=null && fast_p.next != null){   
   slow_p = slow_p.next;
   fast_p = fast_p.next.next;
   if(slow_p == fast_p){
    return true;
   }
  }
   return false;
 }

}//LinkedList

let linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
linkedList.addLast(6);

console.log('draw: ');
linkedList.draw();
console.log('last: ',linkedList.getLast());

linkedList.getFirst();
linkedList.draw();
console.log('first: ',linkedList.getFirst());

//linkedList.reverse();
console.log('rev: ');
linkedList.draw();
linkedList.removeKNode(4);
linkedList.draw();



//cd bootcamp\BC_exercises\js 
//node linkedList.js
