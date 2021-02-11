let person = {
 fname: 'saif',
 lname: 'kb',
 age: 38,
livesIn: 'Julis'
};

function swapObj(aPerson){
 let nosrep = {};
 for(let prop in aPerson){
  if(aPerson.hasOwnProperty(prop)){
    nosrep[aPerson[prop]] = prop;
  }
 }

 return nosrep;
}

console.log(swapObj(person));


//cd bootcamp\BC_exercises\js 
//node 7.6-object_iteration.js