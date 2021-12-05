// function digital_root(n) {
//   let sum =0;
//   while( n >0){
//     sum += n % 10;      
//     n-= n % 10;
//     n= n/10;
//     if(sum>9 && n ===0) {
//       n=sum;
//       sum=0;
//     }
//   }
//   return sum;
// }

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(26))//8
console.log(digital_root(16))//7
console.log(digital_root(456))//6




//node digital_root.js