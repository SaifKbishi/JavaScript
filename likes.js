function likes(names) {
  let len = names.length;
  switch (len){
      case len=0:
        return "no one likes this"
        break;
      case len=1:
        return names[0] + " likes this"
        break;
      case len=2:
        return names[0] +' and '+names[1]+' like this'
        break;
      case len=3:
        return names[0] + ', '+names[1]+' and '+names[2]+' like this'
        break;
      default:
        return names[0] + ', '+names[1]+' and '+parseInt(names.length-2)+' others like this'
        break;
  }
}


console.log(likes([])) //, 'no one likes this');
console.log(likes(['Peter']))//, 'Peter likes this');
console.log(likes(['Jacob', 'Alex']))//, 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']))//, 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))//, 'Alex, Jacob and 2 others like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Allan']))//, 'Alex, Jacob and 2 others like this');


//node likes.js