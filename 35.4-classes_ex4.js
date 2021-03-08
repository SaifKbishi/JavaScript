class Point{
 constructor(x,y){
  this.x = x;
  this.y = y;
 }
 getX(){
  return this.x;
 }
 getY(){
  return this.y;
 }
 addToX(x){
  this.x += x;
 }
 addToX(y){
  this.y += y;
 }
 setX(x){
  this.x = x;
 }
 setX(y){
  this.y = y;
 }
 addPoint(firstPoint){
  this.x += firstPoint.getX();
  this.y += firstPoint.getY();
 }
 isSame(firstPoint){
  if(this.x === firstPoint.getX() && this.y === firstPoint.getY())
  return true;
  else
  return false;
 }
 print(){
  console.log(`x: ${this.x}, y: ${this.y}`);
 }

}//Point


//cd bootcamp\BC_exercises\js 
//node 35.4-classes_ex4.js

