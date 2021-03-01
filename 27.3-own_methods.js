const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(callback){
 let newArr=[];
 for(let i=0; i < this.length; i++){
  if(callback(this[i])){
   newArr.push(this[i]);
  }
 }
 return newArr;
}

console.log('myFilter function: ',words.myFilter(doSomeThingFunction3));

function doSomeThingFunction3(element){
 if(element.length > 3){
  return true;
 } 
}





//cd bootcamp\BC_exercises\js 
//node 27.3-own_methods.js