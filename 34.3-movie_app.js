console.log('working movie');
/**
 * Here is your key: cd09ef53
 * OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=cd09ef53
 * 
 * input for movie name
 * input for button search
 * 
 * create a card
 * with poster
 * genre
 * year
 * plot
 * director
 * actors
 * ratings object
 * on NEW search clear old searches
 */
 //http://www.omdbapi.com/?apikey=cd09ef53&t=braveheart
 const cors = 'https://api.codetabs.com/v1/proxy?quest=';
 const baseEndpoint = 'https://www.omdbapi.com/?apikey=cd09ef53&';
 const posterEndpoint = 'https://img.omdbapi.com/?apikey=cd09ef53&';//poster API
 const moviesArray = [];

 //const cors = 'https://cors-anywhere.herokuapp.com/';
 const searchMovie = async (query)=>{
  try{
   const requestMovies = await fetch(`${cors}${baseEndpoint}${query}`);
   const moviesData = await requestMovies.json();
   if (!requestMovies.ok) {  return handleError(moviesData.message); }
   console.log('moviesData: ',moviesData);

   let movieObj = {
    title: moviesData.Title,
    genre: moviesData.Genre,
    year: moviesData.Year,
    plot: moviesData.Plot,
    director: moviesData.Director,
    actors: moviesData.Actors,
    ratings: moviesData.Ratings,
   };
   moviesArray.push(movieObj);
   //console.log(movieObj);
   displayMovie(movieObj); //display movie when all data is ready
  }
  catch(error){
   console.log(`${error}, error fetch data`);
  }
 }//searchMovie

 function getUserSearchTerm(){
  let searchValue = document.querySelector('#searchTxtFeild');
  console.log(searchValue);
  
 }
 searchMovie('t=braveheart');

 const displayMovie = (aMovie)=>{
  console.log(aMovie);
 }//displayMovie