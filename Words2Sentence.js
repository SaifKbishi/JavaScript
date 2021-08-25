'use strict';

/**
 * Write function which will create a string from a list of strings, separated by space.
 * Example:
 * ["hello", "world"] -> "hello world" 
 * */
const words = ["hello", "world"];

const Words2Sentence = (array)=>{
    console.log(array);
    const newarr = array.join(' ');
    console.log(newarr)
}



Words2Sentence(words)

// node Words2Sentence.js