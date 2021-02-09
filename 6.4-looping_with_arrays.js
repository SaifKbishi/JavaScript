const theWorldPopulation = 7900;
//18, 11.4, 15, 0.11
let populations = [1441, 900, 1200, 9]; //[['china', 1441],['canada', 900],['usa', 1200],['israel', 9]];
let percentages = new Array;

function populationPercentages(popsArray){
 for(let i=0; i< popsArray.length; i++){
  percentages.push(percentageOfWorld1(popsArray[i]));
 }
 console.log(percentages);
 return percentages;
}

function percentageOfWorld1(population){
 percentage = population / theWorldPopulation * 100;
 return percentage;
}


populationPercentages(populations);


/*cd bootcamp\BC_exercises\js */
/*node 6.4-looping_with_arrays.js*/