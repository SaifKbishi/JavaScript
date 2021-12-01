const centuryFromYear = (year)=>{
  return Math.floor((year -1)/100)+1
}


console.log(centuryFromYear(2021))
console.log(centuryFromYear(1700))


//node centuryFromYear.js