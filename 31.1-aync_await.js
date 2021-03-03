
const getIDs = () =>
new Promise((resolve, reject) => {
 setTimeout(() => {
  resolve([532, 543, 753, 1, 5]);
 }, 1500);
});


console.log(getIDs);

//cd bootcamp\BC_exercises\js 
//node 31.1-aync_await.js


