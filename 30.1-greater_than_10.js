
function greaterThanTen(num){
 return new Promise((resolve, reject)=>{  
  let greaterThan10 = (num >10)? true : false;
  if(greaterThan10){
   resolve(num); //resolve is called if the condition is met
  }else{
   reject(num); //reject is called if the condition fails
  }  
 });
}

greaterThanTen(12)
 .then((n)=>{//then called on success (resolve)
   console.log(`${n} iss greater than 10`);  
 })
 .catch((n)=>{  
   console.log(`${n} less than ten`);
 });

 greaterThanTen(7)
 .then((n)=>{
   console.log(`${n} greater than 10`);   
 })
 .catch((n)=>{
  console.log(`${n} is less than ten`);
 });


//cd bootcamp\BC_exercises\js 
//node 30.1-greater_than_10.js