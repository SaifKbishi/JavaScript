function polyShape(n){
  if(n===1) {return 1}
  else {
    return (polyShape(n-1) + (n-1)*4)
  }
}


console.log(polyShape(1))
console.log(polyShape(2))
console.log(polyShape(3))
console.log(polyShape(4))
console.log(polyShape(5))
//node polyShape.js


