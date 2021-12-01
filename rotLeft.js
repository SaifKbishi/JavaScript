function rotLeft(a, d) {
    if(a.length === 1) return a;
    
    for(let i=0; i< d; i++){
        let firstOne = a.shift();
        a.push(firstOne);
    }
    return a;
}


console.log(rotLeft([1, 2, 3, 4, 5], 2))
console.log(rotLeft([33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13))

//node rotLeft.js