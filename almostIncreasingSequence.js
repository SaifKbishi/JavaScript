function almostIncreasingSequence(sequence) {    
    let counter =0;
    if(sequence.length === 1) return true;
    // console.log('sequence before: ',sequence);
    for(let i=0; i< sequence.length; i++){
      if( (sequence[i] >= sequence[i+1]) ){
    //   if(sequence[i] >= sequence[i+1] ) && (i+1 != sequence.length-1)){
            sequence.splice(i,1);
            counter++;
            i=-1;
        }        
    }
    // console.log('sequence after: ',sequence);
    // // process.stdout.write("sequence: ", sequence);
    // for(let i=0; i< sequence.length; i++){
    //     if((sequence[i+1] - sequence[i]) > 0 && i+1 != sequence.length-1){            
    //         counter++;
    //     }        
    // }
    if(counter > 1) return false;
    else if(counter <= 1) return true;
}

const sequence10 = [1, 2, 3, 4, 5, 3, 5, 6];
const sequence11 = [40, 50, 60, 10, 20, 30];
const sequence13 = [1, 2, 5, 3, 5];
const sequence17 = [1, 2, 3, 4, 99, 5, 6];
const sequence3  = [1, 2, 1, 2];
const sequence16 = [1, 2, 3, 4, 3, 6];
const sequence19 = [3, 5, 67, 98, 3];

console.log('3 false:',almostIncreasingSequence(sequence3)) // false
console.log('10 false:',almostIncreasingSequence(sequence10))// false
console.log('13 true:',almostIncreasingSequence(sequence13))//true
console.log('17 true:',almostIncreasingSequence(sequence17))//true
console.log('16 true:',almostIncreasingSequence(sequence16)) //true
console.log('19 true:',almostIncreasingSequence(sequence19)) //true

//node almostIncreasingSequence.js



/**
function almostIncreasingSequence(sequence) {    
    let counter =0;
    if(sequence.length === 1) return true;
    
    for(let i=0; i< sequence.length; i++){
        if(sequence[i] >= sequence[i+1] ){
            sequence.splice(i+1,1)
            counter++;
            i=-1;
        }
    }
    if(counter > 1) return false;
    else if(counter <= 1) return true;
} */