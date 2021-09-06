//Character with longest consecutive repetition

const longestRepetition = (teststring)=>{
  let str ='';
  let theLength,longest = 0;
  const newarray=[];
  const toreturn=['', 0];

  if(teststring.length ===0) return [str, longest]; 
  
	let strArr = teststring.split('');  
	let j=0;
	for(let i=j; i<strArr.length; i++){
	  if(strArr[i] === strArr[i+1]){
		continue;
	  }
	  theLength= teststring.substring(j, i+1).length;
	  if(longest < theLength){
		longest = theLength,
		str= teststring.substring(j, j+1)
	  }
	  newarray.push(teststring.substring(j, j+1), theLength);
	  j=i+1;
	}//O(n)
  return [str, longest];
}

console.log(longestRepetition("aaaabb"))
console.log(longestRepetition("bbbaaabaaaa"))
console.log(longestRepetition("cbdeuuu900"))
console.log(longestRepetition("abbbbb") )
console.log(longestRepetition("aabb"))
console.log(longestRepetition(""))
console.log(longestRepetition("ba"))

//node longestRepetition.js