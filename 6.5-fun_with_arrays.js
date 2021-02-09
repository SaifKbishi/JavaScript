
//6.5.1
let sameOBJ_array = new Array;
sameOBJ_array.length = 100;
sameOBJ_array.fill(3.5);
console.log('6.5.1: ',sameOBJ_array);

//6.5.2
const arr652 = Array.from({length:100}, function(item, index){
 return index +1;
} );
console.log('6.5.2',arr652);


//6.5.3
console.log('\n\n 6.5.3');
let person = {
fname: 'Saif',
lname: 'Kb',
age: 38
};
console.log(person);
const arr653 = Array.from(person, function(){
 return index;
});


//6.5.4
//array into one object.
console.log('\n\n 6.5.4');
const justAnArray = [73, 74, 75,  76, 77, 78];
Object.assign({}, justAnArray);
console.log(Object.assign({}, justAnArray));


//6.5.5
const justAnArray2 = [73, 74, 75,  76, 77, 78];
console.log('justAnArray2 is: ',Array.isArray(justAnArray2),'ly an array');

//6.5.6.a
console.log('\n\n 6.5.6.a');
const justAnArray5 = [73, 74, 75,  76, 77, 78];
console.log('copying',justAnArray6 = justAnArray5.slice());
console.log('justAnArray6: \n',justAnArray6 );
justAnArray6 [3] =0;
console.log('justAnArray5: \n',justAnArray5);
console.log('justAnArray6: \n',justAnArray6 );


//6.5.6.b
console.log('\n\n 6.5.6');
const justAnArray3 = [73, 74, 75,  76, 77, 78];
console.log(justAnArray4 = justAnArray3.copyWithin());
console.log(justAnArray4 );
justAnArray4 [3] =0;
console.log(justAnArray3 );
console.log(justAnArray4 );

/*cd bootcamp\BC_exercises\js */
/*node 6.5-fun_with_arrays.js*/