function checkchoose(m, n) {
  if(n > 0 && m > 0){
    let factN= factorial(n);
    let n_m = (factN / m);
    const arr =[];
    for(let i=1; i<=n; i++){
      arr.push(factorial(i) * factorial(n-i));
    }
    let h = arr.find(elem => elem === n_m);
    if(h){
      return arr.indexOf(h)+1;
    }else
    return -1;
  }
}
const factorial = (n)=>{
  if(n>0){
    if(n===1) return 1;
    return n*factorial(n-1);
  }return 1;
}
console.log(checkchoose(6, 4) )
console.log(checkchoose(4, 4) )
console.log(checkchoose(4, 2) )
console.log(checkchoose(35, 7))
console.log(checkchoose(36, 7))
console.log(checkchoose(77558760, 29)) //14     will not work

//node checkchoose.js