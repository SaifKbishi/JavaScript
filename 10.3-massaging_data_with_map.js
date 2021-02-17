const data = [
 {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
   meats: ["hamburgers", "sausages"],
   fish: ["salmon", "pike"],
   },
 },
 {
 name: "Mark",
 birthday: "10-5-1980",
 favoriteFoods: {
 meats: ["hamburgers", "steak", "lamb"],
 fish: ["tuna", "salmon", "barracuda"],
 },
 },
 {
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["ham", "chicken"],
 fish: ["pike"],
 },
 },
 {
 name: "Thomas",
 birthday: "1-10-1990",
 favoriteFoods: {
 meats: ["bird", "rooster"],
 fish: ["salmon"],
 },
 },
 {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
   meats: ["hamburgers", "lamb"],
   fish: ["anchovies", "tuna"],
   },
 },
 ];
//10.3.1
let nameArray=[];
function onlyNames(array){
 return nameArray = array.map(function(array){
  return array.name
 });
}
/* different solution
function onlyNames(array){
 return nameArray = array.map(names);
}
function names(obj){
 return{
  name:`${obj.name}`
 }
}
*/
//console.log(onlyNames(data));

//10.3.2
let objArray=[];
function allBornBefore1990(arr){
 return objArray = arr.map(filterYear1990);
}

function filterYear1990(years){
 let birthday = `${years.birthday}`;
 birthday = parseInt(birthday.slice(-4));
 if(birthday < 1990){
  //console.log('hello, birthday < 1990');
  return{ //returning the object
   birthday:`${years.birthday}`,
   name: `${years.name}`,
   favoriteFoods: `${years.favoriteFoods.meats} & ${years.favoriteFoods.fish}`
  }
 }else return;
}
//console.log('allBornBefore1990: ',allBornBefore1990(data));

//10.3.3    - map reduce
let favoriteFoodsCount ={};
function allFoods(data){
  console.log('all foods:');
  data.forEach(food => {
    let shortcut = food.favoriteFoods.meats;
    /*for(let i=0; i< food.favoriteFoods.meats.length; i++){
      count = favoriteFoodsCount[food.favoriteFoods.meats[i]];
      favoriteFoodsCount[food.favoriteFoods.meats[i]] = count ? count +1 :1;
    }*/
    for(let i=0; i< shortcut.length; i++){//with shortcut
      count = favoriteFoodsCount[shortcut[i]];
      favoriteFoodsCount[shortcut[i]] = count ? count +1 :1;
    }
    for(let i=0; i< food.favoriteFoods.fish.length; i++){
      count = favoriteFoodsCount[food.favoriteFoods.fish[i]];
      favoriteFoodsCount[food.favoriteFoods.fish[i]] = count ? count +1 :1;
    }
  });
  console.log(favoriteFoodsCount);
}

allFoods(data);
//cd bootcamp\BC_exercises\js 
//node 10.3-massaging_data_with_map.js

/*
let favoriteFoodsCount2 ={};
const 
favFoods = data.food.favoriteFoods.map( aFood ={
  const container ={};
  container[aFood.]
})



allFoods2(data);*/