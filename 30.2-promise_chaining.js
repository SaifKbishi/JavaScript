function promiseTimeout(ms){
 return new Promise((resolve, reject)=>{
  console.log('Promise');
  setTimeout(resolve, ms);
  setTimeout(reject, 2*ms);
 });
}

promiseTimeout(2000)
 .then(()=>{
   console.log('done');
   return promiseTimeout(3000);
 })
 .then(()=>{
  console.log('done again');
  return Promise.resolve(52);
 })
 .then((result)=>{
  console.log(result);
 })
 .catch(()=>{
  console.log('error');
  return Promise.reject(68);
 });

//cd bootcamp\BC_exercises\js 
//node 30.2-promise_chaining.js