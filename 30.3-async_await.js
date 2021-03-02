function promiseTimeout(ms){
 return new Promise((resolve, reject)=>{
  console.log(`inside Promise and waiting ${ms} milliseconds`);
  setTimeout(resolve, ms);
  setTimeout(reject, 5*ms);
 });
}

async function simulateLongOp(){
 console.log('start 01');
 console.log('are we doing something here?');
 await promiseTimeout(4000);
 console.log('end 01');
 console.log('more stuff to do'); 
 return 'i just got back from the server' ;
}

async function run(){
 const answer = await simulateLongOp();
 console.log(answer);
}

//run();
/*promiseTimeout(2000)
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
 });*/

//cd bootcamp\BC_exercises\js 
//node 30.3-async_await.js


async function run2(){
  console.log('start');
  await promiseTimeout(3000);
  console.log('when the waiting is ended we stop !!!@@$#@');
}

run2();