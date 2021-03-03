/**
 * need to add validation for duplicate searches
 * need to enable Enter button search
 * check what is user is not found
 */

const baseEndpoint = 'https://api.github.com/users/';
const main = document.querySelector('.main');
const displayArea = document.querySelector('.displayArea');
const names =[];
const searchBtn = document.querySelector('.searchBtn');
const githubersArea = document.createElement('div');
main.insertAdjacentElement('afterend',githubersArea);
githubersArea.classList.add('githubber');
let textAreaValue = document.querySelector('.userName');

const github = async (query)=>{
 try{
  const isName = names.includes(textAreaValue.value);
  if(isName){
    console.log('names', names);
    return handleError("user already exists");
  }
  names.push(textAreaValue.value);

  const requestGithub = await fetch(`${baseEndpoint}${query}`);
  const data = await requestGithub.json();
  console.log(data);
  return data;
 }catch(error){
  console.log(`${error} , cannot fetch data`);
 }
}//github
//github('SaifKbishi');

const handleSearch = async ()=>{ 
 let githubUser = textAreaValue.value;
 if(githubUser != ''){
  const githubber = await github(githubUser);

  displayGitHubUser(githubber);
 }else{
  console.log('text area should be animated for the user');
 }
}//handleSearch
searchBtn.addEventListener('click',handleSearch);

const displayGitHubUser = (user)=>{ 
  console.log(user.html_url);
  let html = '';
  html += `<a href="${user.html_url}" target="_blank"><div class="card">
   <img src="${user.avatar_url}" alt="${user.login}">
   <div class="loginName">${user.login}</div>
   <div class="publicRepos">Public Repos: ${user.public_repos}</div>
  </div></a>`
  displayArea.insertAdjacentHTML('beforeend',html); 
  
  //console.log(user.html_url);
  //console.log('user',user.login);
  /*const card = document.querySelector('.card');
  console.log(card);
  card.addEventListener('click', redirectToGitHub(user.html_url));
  console.log('user.html_url: ',user.html_url);*/
}//displayGitHubUser

const handleError = (error) => {
  const errorContainer = document.querySelector(".error");
  errorContainer.textContent = error;
};//handleError

window.addEventListener("load", () => {
  textAreaValue.focus();
});

/* const redirectToGitHub =  (url)=>{
 console.log('from redirct', url);
 window.location.href(url);
} */



/*
function buildPage(){
  const main = document.createElement('div');
  main.classList.add('main');
  document.body.appendChild(main);
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.classList.add('userName');
  userName.value = 'SaifKbishi';
  main.insertAdjacentElement('afterbegin',userName);

  let searchBtn = document.createElement('input');
  userName.type = 'button';
  userName.classList.add('searchBtn');
  userName.value = 'search';
  userName.insertAdjacentElement('afterbegin',searchBtn);
  
  const displayArea = document.createElement('div');
  displayArea.classList.add('displayArea');
  main.insertAdjacentElement('afterend', displayArea);
}

*/
