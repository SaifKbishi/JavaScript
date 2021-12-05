function splitText(text, max) {
  const textarr = text.split(' ');
  let wordsToString =[]; //contains the words in sections
  const stringsArray=[];
  let wordsLength =0; //words allready added 
  for(let i=0; i<textarr.length; i++){
    if((wordsLength + textarr[i].length) <= max){//if the string in the array is ashorter than max
      wordsLength+=textarr[i].length;
      wordsLength++; //spaces
      wordsToString.push(textarr[i]);
    }else{
      stringsArray.push(wordsToString.join(' '))
      wordsLength=0;
      wordsToString =[];
      wordsToString.push(textarr[i]);
    }
  

  }//for
  // console.log(stringsArray.push(wordsToString.join(' ')))
  //return stringsArray.push(wordsToString.join(' '));
  stringsArray.push(wordsToString.join(' '));
  // console.log(stringsArray[0].length)
  return stringsArray
}


console.log(splitText('Abc cde', 50), splitText('Abc cde', 50).length, splitText('Abc cde', 50)[0].length) //["Abc cde"]
console.log(splitText('Abc cde', 5), splitText('Abc cde', 5).length, splitText('Abc cde', 5)[0].length)//["Abc cde"]
console.log(splitText('A b C d E', 5))//["A b C", "d E"]
console.log(splitText("Lorem ipsum dolor sit amet, consectetur adipiscing", 15))//["Lorem ipsum", "dolor sit amet,", "consectetur", "adipiscing"]
console.log(splitText('', 5))//[]
//node splitText.js

/**
if strings array length less than max
then push that current word to it and update the length counter */