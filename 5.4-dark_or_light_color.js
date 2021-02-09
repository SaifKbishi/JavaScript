
function darkOrLight(color){

 switch(color){
  case 'yellow':
  case 'pink':
  case 'orange':
  return 'light color';
  case 'blue':
  case 'purple':
  case 'brown':
  return 'dark color';  
  default:
   return 'unknown color'
 }
}


console.log(darkOrLight('green'));
console.log(darkOrLight('yellow'));
console.log(darkOrLight('red'));
console.log(darkOrLight('purple'));
console.log(darkOrLight('brown'));
console.log(darkOrLight('pink'));
console.log(darkOrLight('orange'));



/*cd bootcamp\BC_exercises\js */
/*node 5.4-dark_or_light_color.js*/