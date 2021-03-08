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
let point01 = new Point(3,4);
let point02 = new Point(3,5);
let point03 = new Point(8,2);
let point04 = new Point(6,3);
let point05 = new Point(6,3);

console.log('4 5',point04.isSame(point05));
console.log('4 3',point04.isSame(point03));

//cd bootcamp\BC_exercises\js 
//node 35.4-classes_ex4.js

