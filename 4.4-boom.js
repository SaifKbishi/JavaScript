(function (n){
 'use strict';

 //7 BOOM 
 console.log('\n');
 console.log('7 BOOM:');
 for(let i=1; i <= n; i++){
     /*if(i%7 === 0 || i%10 ===7 || Math.floor(i/10) === 7)*/
     let number = i.toString().split('');
     if(number.includes('7'))
     {        
         process.stdout.write('\x1b[36mBOOM\x1b[0m,');
     }else if(i != 100){
         process.stdout.write(i +',');
     }else{
         process.stdout.write(i +'');
     }
 }
 console.log('\n');
})(18);



/*cd bootcamp\BC_exercises\js */
/*node 4.4-boom.js*/