
 let isIsland = true;


function countryToLiveIn(language, isIsland, population, country){
 let isEnglish = (language =='English') ? true : false;
 thisIsNotIsland = (!isIsland) ? true : false;
 let isPopLessThan50 = (population < 50) ? true : false;

 if(isEnglish && thisIsNotIsland && isPopLessThan50 ){
  console.log(`You should live in ${country}`);  
  }else{
    console.log(`${country} does not meet your criteria`);
    return;
  }  
}

console.log(countryToLiveIn('Hebrew', !isIsland, 40, 'Israel'));
console.log(countryToLiveIn('English', isIsland, 40, 'Fiji'));
console.log(countryToLiveIn('English', !isIsland, 40, 'Hawai'));

/*cd bootcamp\BC_exercises\js */
/*node 5.1-country_to_live_in.js*/