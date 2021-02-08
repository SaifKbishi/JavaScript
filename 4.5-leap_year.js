
function isLeapYear(year){
 if(isDividableBy_4(year) && !isDividableBy_100(year) || isDividableBy_400(year)){
  console.log('it is indeed a leap year');
 }else{
  console.log('it is not a leap year');
 }
}

function isDividableBy_4(year){
 return ( (year % 4) ==0 ) ? true : false;
} 
function isDividableBy_100(year){
return ( (year % 100) ==0 ) ? true : false;
}
function isDividableBy_400(year){
return ( (year % 400) ==0 ) ? true : false;
}


isLeapYear(2012); // a leap year
isLeapYear(2100); // NOT leap year
isLeapYear(2400); // a leap year


/*cd bootcamp\BC_exercises\js */
/*node 4.5-leap_year.js*/