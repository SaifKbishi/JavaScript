function middleMe(N, X, Y){
  let tmp ='';
  let str ='';
    if((N%2) != 0){
      return X;
    }else{
      for(let i=0; i<N/2; i++){
        tmp+=Y;
      }
      str+=tmp;
      str+=X;
      str+=tmp;
    }
    return str;
}


console.log(middleMe(18, 'z', '#'))
console.log(middleMe(19, 'z', '#'))

//node middleMe.js