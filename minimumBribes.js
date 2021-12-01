function minimumBribes(q) {
    let counter =0;
    let chaotic =false;
    for(let i=0; i<q.length; i++){      
      let dif = (q[i] - i);
        if(dif > 3){
          chaotic=true;
        }
        else if(dif === 3){
          counter +=2;
        }        
        else if(dif === 2){
          counter +=1;
        }        
        else if(dif === -2){
          counter +=1;
        }        
        else if(dif === -3){
          counter +=1;
        }        
    }
    if(chaotic) 
        console.log('Too chaotic');
    else console.log('counter: ',counter);
}


console.log('3: ') 
minimumBribes([2, 1, 5, 3, 4])
console.log('T ')
minimumBribes([2, 5, 1, 3, 4])

console.log('T')
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])

console.log('7')
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
console.log('4')
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])

//node minimumBribes.js