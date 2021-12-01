const findOdd=(A)=>{
  const sorted = A.sort();
  let num=0;
  console.log(sorted);
  for(let i=0; i<sorted.length; i++){
    let counter=0;
    num = sorted[i];
    for(let j=0; j<sorted.length; j++){
      if(num === sorted[j]){
        counter++;
      }else break;
    }
    if((counter % 2)!=0){
        // console.log('num: ', num);
        return num;
      }else continue;
  }
  return num;
}

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
// console.log(findOdd([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]))
console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]))//-1
console.log(findOdd([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ]))//1
// console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))//5
// console.log(findOdd([ 5,5, 5 ]))//5

//node findOdd.js

