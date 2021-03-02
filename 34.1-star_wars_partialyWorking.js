console.log('it is working');
const baseEndpoint = 'https://swapi.dev/api/';
const peopleGrid = document.querySelector('.people');
const tableBody = document.querySelector('.tableBody');
//people
let myObj =[];
async function fetchPeople(query){
 const res = await fetch(`${baseEndpoint}${query}/`);
 const data = await res.json();
 return data;
  console.log('data',data.results);
  myObj=data.results;
  console.log('myobj',myObj);
 return fetch(myObj.homeworld); 
}

fetchPeople('people').then(data=>{
 console.log('people');
 console.log('data results',data.results);
 const people = data.results;
 displayPeople(people);
 }).then()
 .catch(handleError);

//planet
const fetchPlanets = async (planetUrl)=>{
 const res = await fetch(`${planetUrl}`);
 const planetData = await res.json();
 //console.log('planetData', planetData);
 return planetData; 
}
let per= document.querySelector('.per');
function displayPeople(people){
 //console.log('displayPeople', people);
 let html=''; 
 for(let i=0; i<10; i++){
  let worldObj;
 //let planet = fetchPlanets(people[i].homeworld).then(data=>{console.log('data from promise',data.name, data.population);}).catch(console.log('error in fetching planets'));
 fetchPlanets(people[i].homeworld).then(data=>{
  return data;
  console.log('data from promise',data.name, data.population, displayPlanet(data));}).catch(console.log('error in fetching planets'));

 //console.log('planet in people',planet);
//console.log(fetchPlanets);
  html += `<tr class="">
  <td>${people[i].name}</td>
  <td>${people[i].hair_color } </td>
  <td>${people[i].height}</td>
  <td >${people[i].name} </td>
  <td class="per">${people[i].mass}</td>
 </tr>`
 //displayPlanet(data)
 }
 tableBody.insertAdjacentHTML('beforeend',html); 
}
/*
function displayPlanet(data){
 per += `<td>${data.name}</td>
 <td>${data.population}</td>`
 tableBody.insertAdjacentHTML('beforeend',per); 
}*/


function handleError(err){
 console.log(`you got an error ${err}`);
}

//cd bootcamp\BC_exercises\js 
//node 34.1-star_wars.js
