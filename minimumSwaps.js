function minimumSwaps(arr) {
  let counter=0;
  
  for(let i=0; i< arr.length; i++){
   if(arr[i] != i+1){ //elem is not in its place 1-n
     let ii = i;
     while(arr[ii] != i+1){
       ii++;
     }
     let temp = arr[ii];
     arr[ii] = arr[i];
     arr[i] = temp;
     counter++;
   }
  }
  return counter;
}



const arr1 = [7, 1, 3, 2, 4, 5, 6];
const arr2 = [2, 3, 4, 1, 5];
console.log(minimumSwaps(arr1))
console.log(minimumSwaps(arr2))


//node minimumSwaps.js