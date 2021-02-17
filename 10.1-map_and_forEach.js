const newReleases = [
 {
  id: 70111470,
  title: "Die Hard",
  boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [4.0],
  bookmark: [],
 },
 {
  id: 654356453,
  title: "Bad Boys",
  boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [5.0],
  bookmark: [{ id: 432534, time: 65876586 }],
 },
 {
  id: 65432445,
  title: "The Chamber",
  boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [4.0],
  bookmark: [],
 },
 {
  id: 675465,
  title: "Fracture",
  boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [5.0],
  bookmark: [{ id: 432534, time: 65876586 }],
 },
 ];

 //10.1.1
let newArray =[];

function id_nameForEach(array){
 array.forEach(element => {
  newArray.push({id: element.id, title: element.title}); //add objects as elements to the array
 });
 return newArray;
}
//console.log(id_nameForEach(newReleases));

//10.1.2
/*DID NOT WORK PROPERLY - 
because it applies the second map on the RESULTS of the first map
*/
let mapArray = [];
function id_nameMap(array){
 mapArray =  array.map(movie_title);//.map(movie_title); //(movie => {movie.id= array.id});
    return mapArray;
}
function movie_title(obj){
 return{ //START OF THE OBJECT
  id: `${obj.id}`,
  title: `${obj.title}`
 }
}
console.log('map array01: ', id_nameMap(newReleases));

const newArray2 = newReleases.map(function(movie){
 return{ //START OF THE OBJECT
  id: `${movie.id}`,
  title: `${movie.title}`
 }
});
console.log('NEW map array: ', newArray2);

//cd bootcamp\BC_exercises\js 
//node 10.1-map_and_forEach.js






/*
let mapArray = [];
function id_nameMap(array){
 mapArray =  array.map(movie_id);//.map(movie_title); //(movie => {movie.id= array.id});
 console.log(mapArray);
   return mapArray;
}
function movie_title(obj){
 return obj.title;
}
function movie_id(obj2){
 return obj2.id ;
}
console.log('map array: ', id_nameMap(newReleases));
 */



