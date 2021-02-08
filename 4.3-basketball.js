let johnTeamAvg = avg(89, 120, 103); //104
let mikeTeamAvg = avg(116, 94, 123); //111
console.log('\n1st:');
findWinner(johnTeamAvg,mikeTeamAvg);

console.log('\nchanging scores');

let johnTeamAvg2 = avg(185, 120, 80); //128
let mikeTeamAvg2 = avg(116, 100, 123); //113
console.log('2nd:');
findWinner(johnTeamAvg2,mikeTeamAvg2);

let maryTeamAvg = avg(97, 134, 105); //
console.log('\nwith Mary');
findWinner(johnTeamAvg2,mikeTeamAvg2, maryTeamAvg);


function findWinner(teamA, teamB, teamC = 0){
 let maxAvg = Math.max(teamA, teamB, teamC);
 switch(maxAvg){
  case teamA:
   printWinner(teamA, "John's Team");
   break;
  case teamB:
   printWinner(teamB, "Mike's Team");
   break;
  case teamC:
   printWinner(teamC, "Mary's Team");
   break;
  default:
   console.log('they have equal scores');
 }
}


function printWinner(teamAvg, teamName){
   console.log(`${teamName} are the winners with ${teamAvg} average score`); 
}
function avg(a,b,c){
 return ((a+ b + c)/3);
}



/************/
/*
function findWinner(teamA, teamB){
 if(teamA > teamB){
  printWinner(teamA, 'John Team')
 }else if(teamA < teamB){
  printWinner(teamB, 'Mike Team')
 }else if(teamA == teamB){
  console.log('they have equal scores');
 }
}*/


/*cd bootcamp\BC_exercises\js */
/*node 4.3-basketball.js*/