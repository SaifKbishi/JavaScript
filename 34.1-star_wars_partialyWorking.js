console.log('it is working');
const baseEndpoint = 'https://swapi.dev/api/';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const peopleGrid = document.querySelector('.people');
const tableBody = document.querySelector('.tableBody');
//people
async function fetchPeople(query){
 const res = await fetch(`${baseEndpoint}${query}/`);
 const data = await res.json();
 return data;
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
 return planetData; 
}
let per= document.querySelector('.per');

function displayPeople(people){
 //console.log('displayPeople', people);
 let html=''; 
 for(let i=0; i<10; i++){

  html += `<tr class="">
  <td>${people[i].name}</td>
  <td>${people[i].hair_color } </td>
  <td>${people[i].height}</td>
  <td >${people[i].name} </td>
  <td class="per">${people[i].mass}</td>
 </tr>`
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
