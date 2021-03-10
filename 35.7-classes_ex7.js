class Room{
 constructor(roomid, level, amount, isFree){
  this.roomid = roomid;
  this.level = level;
  this.amount = amount;
  this.isFree = true;
 }
 fitInRoom(numOfPeople){
  if(numOfPeople <= this.amount && this.isFree){
   this.isFree = false;
   return true;
  }else{
   return false;
  }
 }
 print(){
  console.log(`RoomID: ${this.roomid} at Level ${this.level}, can accumodate ${this.amount} and is free?! ${this.isFree}`);
 }
}//Room











//cd bootcamp\BC_exercises\js 
//node 35.2-classes_ex2.js

