(function (n){
 'use strict';
 const people = ["Greg", "Mary", "Devon", "James"];
 //6.2.1
 for (let i=0; i< people.length; i++){
  console.log(people[i]);
 }
 //6.2.2
 people.shift();
 console.log('remove greg',people);
 //6.2.3
 people.pop();
 console.log('remove James',people);
 //6.2.4
 people.unshift('Matt');
 console.log('add Matt',people);
 //6.2.5
 people.push('Saif');
 console.log('add my name',people);
 //6.2.6
 console.log('6.2.6');
 for (let i=0; i< people.length; i++){
  if(people[i] == 'Mary')
   console.log('Mary only: ',people[i]);
  break; 
 }
 //6.2.7
 //[ 'Mary', 'Devon', 'Matt', 'Saif' ]
 
 //console.log('slice:\n ',people.slice(-3,-2), people.slice(-1));
 const new_People = [...people.slice(2,4)];
 console.log('NEW slice:\n ',new_People);
 //['Devon', 'Saif' ]

 //6.2.8
 console.log('Mary index',people.indexOf('Mary'));
 //6.2.9
 console.log('foo index',people.indexOf('foo'));
 //6.2.10
 let people2 = ["Greg", "Mary", "Devon", "James"];
 people2.splice(2,1,'Elizabeth','Artie')
 console.log(people2);
  //["Greg","Mary", "Elizabeth", "Artie", "James"].
 
  //6.2.11
 let withBob = people.concat('Bob');
  console.log('with Bob:\n',withBob);
  
})();






/*cd bootcamp\BC_exercises\js */
/*node 6.2-array_basics.js*/