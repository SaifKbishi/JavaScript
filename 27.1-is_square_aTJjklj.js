

function Square(a, b, c, d){
 this.a = a;
 this.b = b;
 this.c = c;
 this.d = d;
 }

Square.prototype.isSquare = function(){
 return (this.a === this.b && this.b === this.c && this.c === this.d)? true : false;
}

let test1 = new Square(4,4,4,4);
let test2 = new Square(4,4,4,3);

console.log(test1.isSquare());
console.log(test2.isSquare());

 /*Using prototype properties, add a method to Square named isSquare that
prints true if a Square object has equal edges and false if they are unequal.
Here is the Square function:*/






//cd bootcamp\BC_exercises\js 
//node 27.1-is_square_aTJjklj.js