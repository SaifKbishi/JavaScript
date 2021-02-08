const theWorldPopulation = 7900;

function percentageOfWorld1(population){
    percentage = population / theWorldPopulation * 100;
    return percentage;
}

let china = percentageOfWorld1(1141);
let canada = percentageOfWorld1(790);
let usa = percentageOfWorld1(1500);

console.log('China is about :', china,'% of the wolrd population.');
console.log('China is about :', canada,'% of the wolrd population.');
console.log('China is about :', usa,'% of the wolrd population.');


/****************************/
/*
const percentageOfWorld2 = (pop2) => pop2 / theWorldPopulation * 100;

let china2 = percentageOfWorld2(1141);
let canada2 = percentageOfWorld2(790);
let usa2 = percentageOfWorld2(1500);

console.log('China is about :', china2,'% of the wolrd population.');
console.log('China is about :', canada2,'% of the wolrd population.');
console.log('China is about :', usa2,'% of the wolrd population.');
*/

/*cd Users\Saif\Documents\VScode\bootcamp\BC_exercises\js*/
/*cd bootcamp\BC_exercises\js */
/*node 3_3_function-declaration-part-3.js */