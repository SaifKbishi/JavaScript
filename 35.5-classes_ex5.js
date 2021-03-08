class PointWorld{
 constructor(){
  this.pointsList = [];
 }

 sortPoints(){
  let sortedPoints = this.pointsList.sort(function(firstPoint, secondPoint){
   return firstPoint.getY() - secondPoint.getY();
  });
  return sortedPoints;
 }
 noRepeat(){// not working yet
  let cleanArr = this.pointsList.forEach(element => {
   if(this.isSame(element)){
    this.next;
   }else{
    return this;
   }
  });
 }
sumOfXes(){
 /*let sumX = this.pointsList.foreach(element => {
  this.pointsList.addToX(element.getX());  

 });
 return sumX;*/
 let sum =0;
 for(let i=0; i< this.pointsList.length; i++){
  sum += this.pointsList[i].getX();
 }
 return sum;
 //let sumX = this.pointsList.reduce((this.pointsList.addToX(), sum)=>{});
}//sumOfXes

}//PointWorld

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
let pointsArr = new PointWorld();
pointsArr.pointsList.push(point01);
pointsArr.pointsList.push(point02);
pointsArr.pointsList.push(point03);
pointsArr.pointsList.push(point04);
console.log('pointsArr: ',pointsArr);
console.log('sortPoints: ',pointsArr.sortPoints());
//console.log('noRepeat: ',pointsArr.noRepeat());
console.log('4 5',point04.isSame(point05));
console.log('4 3',point04.isSame(point03));

console.log('sumOfXes', pointsArr.sumOfXes());

//cd bootcamp\BC_exercises\js 
//node 35.5-classes_ex5.js

