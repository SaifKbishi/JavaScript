function jumpingOnClouds(c) {
  console.log('c.length: ', c.length);
  let jumps=0;
    if(c[0] != 0 || c[c.length-1] != 0) return false;
    if(c.length === 2) return jumps=1;
    
    for(let i=0; i< c.length; ){
        if(i+2 && c[i+2] === 0){
            jumps +=1;
            i= i+2;
        }else if(i+1  && c[i+1] === 0){
            jumps +=1;
            i= i+1;
        }else if(c[i+2] !=0 && c[i+1] !=0){
          break
        }        
    }
    return jumps;
}




// console.log('jumps: ',jumpingOnClouds([0,0,1,0,0,1,0])) //4
// console.log('jumps: ',jumpingOnClouds([0,0,0,0,1,0])) //3
console.log('9 jumps: ',jumpingOnClouds([0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0])) //10
console.log('5 jumps: ',jumpingOnClouds([0,1,0,1,0,0,0,0,1,0]))//5
console.log('1 jumps: ',jumpingOnClouds([0,0]))//1
console.log('3 jumps: ',jumpingOnClouds([0,0,0,0,0,0]))//3
console.log('0 jumps: ',jumpingOnClouds([0,1,1,0,0]))//0