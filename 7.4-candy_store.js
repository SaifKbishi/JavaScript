const candyStore = {
 candies: [
  {
   name: "mint gum",
   id: "as12f",
   price: 2,
   amount: 2
  },
  {
   name: "twix",
   id: "5hd7y",
   price: 5,
   amount: 4
  },
 ],
 cashRegister: 200,

 }

//7.4.1
function getCandy(candyStore, id){
 console.log('Candy name: ',candyStore.candies.find(x=> x.id ===id ).name);
 return candyStore.candies.find(x=> x.id ===id ).name;
}
function getPrice(candyStore, id){
 console.log('Candy price: ',candyStore.candies.find(x=> x.id ===id ).price); 
 return candyStore.candies.find(x=> x.id ===id ).price;
}
//add a candy object to array of candy objects
function addCandy(candyStore, id, name, price){
 let newCandy = {
  name: name,
  id: id,
  price: price,
  amount: 3
 }
 candyStore.candies.push(newCandy);
}



function buy(candyStore, id){
 //console.log('Candy name: ',candyStore.candies.find(x=> x.id ===id ).name);
 console.log('Candy to buy amount: ',candyStore.candies.find(x=> x.id ===id ).amount);
 if(candyStore.candies.find(x=> x.id ===id).amount>=1){
  candyStore.cashRegister += candyStore.candies.find(x=> x.id ===id ).price;
  candyStore.candies.find(x=> x.id ===id ).amount --;
 }else{
  console.log(`we are out of  `);
 }
 console.log('cashRegister: ',candyStore.cashRegister);
 console.log('updated amount', candyStore.candies.find(x=> x.id ===id ).amount);
}


getCandy(candyStore,'5hd7y');
getPrice(candyStore,'5hd7y');
addCandy(candyStore,'45215','Egozy' ,5);
addCandy(candyStore, '7777', 'Eleit');
//buy(candyStore, '5hd7y');
buy(candyStore, '45215');
//buy(candyStore, '7777');

console.log(candyStore.candies);




//cd bootcamp\BC_exercises\js 
//node 7.4-candy_store.js

