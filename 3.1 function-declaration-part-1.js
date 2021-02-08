/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
//function expressions:
const welcome =()=> 'Welcome to Appleseeds Bootcamp!';
/*************************************************/
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
power(3);
//function expressions:
const power = (myNumber) => Math.pow(myNumber, 2);
power(3);
/*************************************************/
function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
add(5);
//add(4,4);
//function expressions:
const add = (a, b = 5) => a + b ;
add(4,4);



// From function expressions to function declarations
const hello = () => "Hello!";
//function declaration:
function hello(){
	let greetings = 'Hello!';
	return greetings;
}
hello()
/*************************************************/
const squareRoot = a => Math.sqrt(a);
squareRoot(9);
//function declaration:
function squareRoot(a){
	let myNum = a;
	let result = Math.sqrt(myNum);
	return result;
}
squareRoot(9);
/*************************************************/
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
randomNumbers(3, 7);
//function declaration:
function randomNumbers(a,b){
	return Math.random() * (a - b) + b;
}
randomNumbers(3, 7);




