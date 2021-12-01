const adjacentProducts = (arr)=>{
  let max =-10000;
  for(let i=0; i<arr.length; i++){
    let prd= arr[i] * arr[i+1];
    if(prd> max) max = prd;
  }
  return max;
}



const array1 = [3,6,-2,-5,7,3]
console.log(adjacentProducts(array1))

//node adjacentProducts.js