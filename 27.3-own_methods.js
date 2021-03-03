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
 if(element.length > 5){
  return true;
 } 
}


Array.prototype.myFind = function(callback){
 for(let i=0; i<this.length; i++){
  if(callback(this[i])){
   return this[i];
  }
 }
};



//cd bootcamp\BC_exercises\js 
//node 27.3-own_methods.js