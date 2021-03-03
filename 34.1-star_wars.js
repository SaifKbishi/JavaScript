console.log('it is working2');
const baseEndpoint = 'https://swapi.dev/api/people/';
const peopleGrid = document.querySelector('.people');
const tableBody = document.querySelector('.tableBody');

let data =[];
const fetchPeople = async () => {
  for (let i = 1; i <= 10; i++) {
  const requestPeople = await fetch(`${baseEndpoint}${i}/`);
  const peopleData = await requestPeople.json();
  console.log(peopleData);
  const requestPlanet = await fetch(peopleData.homeworld);
  planetData = await requestPlanet.json();
  
  data.push({ //push whole object to the array
   name: peopleData.name,
   hair: peopleData.hair_color,
   height: peopleData.height,
   planet: {
    name: planetData.name,
    population: planetData.population,
   },
  });
}
 //console.log(data);
 displayData();
}

const displayData = ()=>{
 let html=''; 
 for(let i=0; i<10; i++){
  html += `<tr class="">
  <td>${data[i].name}</td>
  <td>${data[i].hair } </td>
  <td>${data[i].height}</td>
  <td>${data[i].planet.name} </td>
  <td>${data[i].planet.population}</td>
 </tr>`
 }
 tableBody.insertAdjacentHTML('beforeend',html); 
}

fetchPeople();


/*we should have fetch the people data store it in objects array, 
fetch the homeworld data and store it in another objects array  (1{name, population})
get the people homeworld urls
retrive their data from storage per person
and display it*/