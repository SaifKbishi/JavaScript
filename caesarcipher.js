'use strict';

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    let cipheredStr = '';
    const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalLetters = smallLetters.toUpperCase();
    const smallLettersArray = smallLetters.split('');

    for(let j=0; j<k; j++){ //shifting
     let char = smallLettersArray.shift();
     smallLettersArray.push(char);
    }
    const shiftedString = smallLettersArray.join('');
    const shiftedCapitalLetters = shiftedString.toUpperCase();
    const sArr = s.split('');

    sArr.forEach(letter => {
     if(smallLetters.includes(letter)){
      cipheredStr+= shiftedString.charAt(smallLetters.indexOf(letter ));
     }else if(capitalLetters.includes(letter)){
      cipheredStr+= shiftedCapitalLetters.charAt(capitalLetters.indexOf(letter));
     }else
     cipheredStr+=letter;
    });
 return cipheredStr;
}

console.log('here: ',caesarCipher('saifz', 2))
console.log('here: ',caesarCipher('Allan', 2))