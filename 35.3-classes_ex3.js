class sortNumber{
 constructor(num){
  this.numList =[];
 }
 addNum(num){ 
   this.numList.push(num);
   return true;  
 }
 
 removeNum(num){
  if(this.numList.includes(num)){
   console.log('found it');
   let foundIt = this.numList.indexOf(num);
   console.log(foundIt);
   this.numList.splice(this.numList.indexOf(num),1);
   return true;
  }  
  else{
   return false;
  }
 }
 getAll(){
  return this.numList;
 }
 print(){
  this.numList.forEach(element => {
   console.log(element);
  });
 }

share(sortNumberInstance){
 let counter =0;
 this.numList.forEach(element => {
  if(sortNumberInstance.numList.includes(element))
  counter++;
 });
 return counter;
}

union(sortNumberInstance){
 //debugger;
 this.numList.forEach(element => {
  if(sortNumberInstance.numList.includes(element)){
   this.next;
  }else{
   sortNumberInstance.addNum(element)
  }  
 });
return sortNumberInstance.numList;
}


}//sortNumber
let firstInstance = new sortNumber();
firstInstance.addNum(11);
firstInstance.addNum(17);
firstInstance.addNum(19);
firstInstance.addNum(22);
firstInstance.addNum(23);
firstInstance.print();
let secondInstance = new sortNumber();
secondInstance.addNum(59);
secondInstance.addNum(41);
secondInstance.addNum(11);
secondInstance.addNum(19);
//firstInstance.removeNum(11);
console.log(firstInstance.numList);
console.log('getAll',firstInstance.getAll());

console.log(`the share: ${secondInstance.share(firstInstance)} numbers`);
console.log(`union ${secondInstance.union(firstInstance)} `);






//cd bootcamp\BC_exercises\js 
//node 35.3-classes_ex3.js
