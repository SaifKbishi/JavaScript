console.log('it is working');

const mainDiv = document.createElement('div');
mainDiv.classList.add('wrapper');
document.body.appendChild(mainDiv);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent='li1';
const li2 = li1.cloneNode(true);
li2.textContent='li2';
const li3 = li1.cloneNode(true);
li3.textContent='li3';
ul.appendChild(li1);
ul.insertAdjacentElement('beforeend',li2);
ul.insertAdjacentElement('beforeend',li3);
mainDiv.insertAdjacentElement('afterbegin',ul);



const img01 = document.createElement('img');
img01.src='https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg';
img01.width = '250';
img01.classList.add = 'cute';
img01.alt = 'cute puppy';

let warning = `<div>   
  <p>p1</p>
  <p>p2</p>
 </div>`;  //this is NOT an html element, it is a string
 const warningDiv = document.createElement('div');
 warningDiv.innerHTML = warning;
 ul.insertAdjacentHTML('beforebegin',warning);
 const wrapper = document.querySelector('.wrapper');
 wrapper.firstChild.lastElementChild.classList.add('warning');
 wrapper.firstChild.firstElementChild.remove();


 function generatePlayCard(name, age, height){
  /*let div = document.createElement('div');
  div.classList.add('playerCard');
  let h2 = document.createElement('h2');
  h2.textContent= '${name} - ${age}';
  div.insertAdjacentElement('afterbegin',h2);
  let p = document.createElement('p');*/
  const playercardHTML = ` <div>
  <h2>${name} - ${age}</h2>
  <p>they are ${height} and ${age} years old. In dog years this person would be AGEINDOGYEARS. that would be a tall dog!</p>
 </div> `;
 return playercardHTML;
 }

 let cardsDiv = document.createElement('div');
 cardsDiv.classList.add('cards');
 mainDiv.insertAdjacentElement('beforebegin',cardsDiv);
 let card1 = generatePlayCard('bobo', 25, 178);
 let card2 = generatePlayCard('Dan', 16, 99);
 let card3 = generatePlayCard('Mera', 25, 165);
 let card4 = generatePlayCard('AquaMan', 45, 195);
 cardsDiv.insertAdjacentHTML('afterbegin',card1);
 cardsDiv.insertAdjacentHTML('beforeend',card2);
 cardsDiv.insertAdjacentHTML('beforeend',card3);
 cardsDiv.insertAdjacentHTML('beforeend',card4);

 

