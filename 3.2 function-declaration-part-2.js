/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

//explicit:
let welcome = () => {return 'Welcome to Appleseeds Bootcamp!';}

/*************************************************/
function power(a) {
    return result = Math.pow(a, 2);
}
power(5)
//implicit:
let pow = a => Math.pow(a, 2);

/*************************************************/
/*************************************************/
// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

//IIFE functions:
const squareRoot = (function (a){	
	let result = Math.sqrt(a);
	return result;
})(16);
squareRoot

const squareRoot = (function (a){		
	return Math.sqrt(a);
})(16);
squareRoot

/*************************************************/
const randomNumbers = (a, b) => Math.random() * (a - b) + b;


//IIFE functions:
const randomNumbers = (function(a,b){
	return Math.random() * (a - b) + b;
})(1,10);
randomNumbers




