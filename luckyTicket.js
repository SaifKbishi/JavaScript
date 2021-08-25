function luckyTicket(s) {
 let counter =0;
 if((s.length % 2)===0){
   let half = s.length /2;
   let arr01 = s.substring(0, half);
   let arr02 = s.substring(half );
   
   let arr01String = arr01.split('').sort();
   let arr02String = arr02.split('').sort();
   for(let i=0; i<half; i++){
     if(arr01String[i] !== arr02String[i]){
       counter+=2;
     }else{
       continue;
     }
   }
 }else{
   console.log(s, 'this ticket cannot be lucky tikcet');
 }
 // console.log('counter:',counter)
 return counter;
}

console.log("book", luckyTicket("book"))
console.log("mewmwe", luckyTicket("mewmwe"))
console.log("bbaaaa", luckyTicket("bbaaaa"))
console.log("ww", luckyTicket("ww"))
console.log("abcdefa", luckyTicket("abcdefa"))

//cd bootcamp\BC_exercises\js 
//node luckyTicket.js

