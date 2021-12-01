function arrayManipulation(n, queries) {
    const array1 = Array(n);
    array1.fill(0);
    for(let i=0; i <queries.length; i++){//rows 0, 1, 2
          for(let d=queries[i][0]; d<=queries[i][1]; d++){
            array1[d-1] += queries[i][2];
          }
    }
    console.log('array1: ',array1)
    console.log('max: ',Math.max(...array1))    
}

const queries =  [[1, 5, 3  ],[4, 8, 7  ],[6, 9, 1 ]]
const queries1 = [[1, 2, 100],[2, 5, 100],[3, 4, 100]]
const queries2 = [[2, 6, 8 ],[3, 5, 7 ],[1, 8, 1 ],[5, 9, 15]]

console.log('10'); arrayManipulation(10, queries);
console.log('5'); arrayManipulation(5, queries1);
console.log('5'); arrayManipulation(10, queries2);

//node arrayManipulation.js



/**
function arrayManipulation(n, queries) {
    const array1 = Array(n);
    array1.fill(0);    
    for(let i=0; i <queries.length; i++){//rows 0, 1, 2
          for(let d=queries[i][0]; d<=queries[i][1]; d++){
            array1[d-1] += queries[i][2];
          }
    }
    return Math.max(...array1);   
}
 */