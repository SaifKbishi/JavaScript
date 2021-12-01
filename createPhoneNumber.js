function createPhoneNumber(numbers){
  const arr1 = numbers.slice(0,3)
  const arr2 = numbers.slice(3,6)
  const arr3 = numbers.slice(6)
  let str='';
  str+=('(')
  str+= arr1.join('')
  str+= ') '
  str+= arr2.join('')
  str+= '-'
  str+= arr3.join('')
console.log(str)
return str
  // for(let i=0; i<strlen; ){
  // switch(i){
  //   case i=0:
  //     // phArr.concat(charsarray.slice(0,1))
  //     // phArr.concat('(')
  //     str.concat('(');
  //     i++;  //i=1
  //     console.log(str)
  //     break;
  //   case i=1:
  //     str.concat(arr1.join(''));
  //     i+=3;     //i=4
  //     break;
  //   case i=4:
  //     phArr.concat(charsarray.slice(1,3));//)
  //     i+=2;
  //     break;
  //     case i=6:
  //     phArr.concat(arr2);//456
  //     i+=3;
  //     break;
  //     case i=9:
  //     phArr.concat('-');//-
  //     i++;
  //     break;
  //     case i=10:
  //     phArr.concat(arr3);//456
  //     break;
  //   }
  // }
  // console.log(phArr)
  // return phArr;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
  0123456789
//(123) 456-7890
//node createPhoneNumber.js