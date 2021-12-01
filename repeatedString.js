function repeatedString(s, n) {
  let all_a=0;
  let oneString_a=0;
  for(let i=0; i <s.length; i++){
    if(s[i] === 'a')
      oneString_a +=1;
  }
  if(n===1) return oneString_a;
  if(n >1){
    let repeats = Math.floor(n / s.length);
    let reminder = n % s.length;    
    // console.log('repeats: ',repeats);
    // console.log('reminder: ',reminder);
    if(reminder > 0){
      for(let j=0; j< reminder; j++){
        if(s[j] === 'a')
          all_a +=1;
      }
      // console.log('all_a in reminder', all_a)
    }
    
    all_a += oneString_a * repeats;
  }  
  console.log('all_a: ',all_a)
  return all_a;
}



console.log('aba ',repeatedString('aba', 10))
console.log('\n abcac ',repeatedString('abcac', 10))