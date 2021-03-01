

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
 this.name = pokemonName;
 this.type = pokemonType;
 this.attackList = pokemonAttackList;
}


let poke1 = new Pokemon('Pikachu', 'big', ['sand','wind']);
let poke2 = new Pokemon('Mew', 'small', ['water', 'air']);
let poke3 = new Pokemon('Ditto', 'big', ['air', 'sand']);


Pokemon.prototype.callPokemon = function(){
 console.log(`i choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(attNum){
console.log(`${this.name} used ${this.attackList[attNum] || 'an attack out of his attacks'} `);
}

poke1.callPokemon();
poke1.attack(1);

poke2.callPokemon();
poke2.attack(1);

poke3.callPokemon();
poke3.attack(5);

//cd bootcamp\BC_exercises\js 
//node 27.2-pokeman.js