var countBits = function(n) {
  
  let sum =0;
  let bin = Number(n).toString(2)
  console.log(bin);
  const arr = bin.split('');
  for(let i=0; i< arr.length; i++){
    sum+=parseInt(arr[i]);
  }
  return sum;
};

console.log(countBits(1234));

//node countBits.js