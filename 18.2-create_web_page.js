
const section = document.createElement('section');
const navbar = document.createElement('div');
navbar.classList.add('navbar');
const logo = document.createElement('div');
const navmenu = document.createElement('div');
const navmenu_ul = document.createElement('ul');
const navmenu_li1 = document.createElement('li');
const li_link1 = document.createElement('a');
navmenu_ul.classList.add('navMenu');
navmenu_ul.style.listStyleType='none';

const welcomemsg = `
<div class="msg">
<h2>welcome to the</h2>
<h1>banff national park</h1>
</div>`;
const welcome =document.createElement('div');
welcome.innerHTML = welcomemsg;

li_link1.textContent = 'Home';
li_link1.href= '#';
const li_link2 = li_link1.cloneNode(true);
li_link2.textContent = 'About';
li_link2.href= '#';
const li_link3 = li_link1.cloneNode(true);
li_link3.textContent = 'WildLife';
li_link3.href= '#';
const li_link4 = li_link1.cloneNode(true);
li_link4.textContent = 'What to see';
li_link4.href= '#';

const navmenu_li2 = navmenu_li1.cloneNode(true);
const navmenu_li3 = navmenu_li1.cloneNode(true);
const navmenu_li4 = navmenu_li1.cloneNode(true);
//navmenu_li4.textContent = 'What to see';




let bgImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg';
//section.style.backgroundImage = bgImgUrl;
//const section = document.createElement

navmenu_li1.insertAdjacentElement('afterbegin',li_link1);
navmenu_li2.insertAdjacentElement('afterbegin',li_link2);
navmenu_li3.insertAdjacentElement('afterbegin',li_link3);
navmenu_li4.insertAdjacentElement('afterbegin',li_link4);


navmenu_ul.appendChild(navmenu_li1);
navmenu_li1.insertAdjacentElement('afterend',navmenu_li2);
navmenu_li2.insertAdjacentElement('afterend',navmenu_li3);
navmenu_li3.insertAdjacentElement('afterend',navmenu_li4);
navmenu.insertAdjacentElement('afterbegin',navmenu_ul);

navbar.insertAdjacentElement('beforeend',navmenu);
navbar.insertAdjacentElement('afterbegin',logo);
navbar.insertAdjacentElement('beforeend', welcome);
section.insertAdjacentElement('afterbegin',navbar);

document.body.appendChild(section);