function countingValleys(steps, path) {
    let valCounter =0;
    let sum =0;
    if((steps % 2) !=0 ) return false;
    for(let i=0; i<=path.length; i++){
        if(sum === 0 && path[i] === 'D') valCounter +=1;
        switch(path[i]){
          case 'U': 
            sum +=1;
            break;
          case 'D':
            sum -=1;
            break;          
        }        
    }
    return valCounter;
}


console.log(countingValleys(8, 'UDDDUDUU') )
console.log(countingValleys(12, 'DDUUDDUDUUUD') )