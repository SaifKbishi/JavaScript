function hourglassSum(arr) {
    let max =-9*7;
    let sum =0;
    let len = arr[0].length;
    if(arr.length != arr[0].length) return;
    if(len < 3) return;
    for(let i=0; i< len-2; i++){
      for(let j=0; j< len-2; j++){
        // console.log(arr[i][j], arr[i][j+1], arr[i][j+2],'\n',
        //                    ' ',arr[i+1][j+1],'\n',
        //             arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2],
        //             )
        sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        // console.log('max: ', max, 'sum: ',sum)
        if(sum > max) max =sum;
      }
    }

    return max
}


const array = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 9]
]
const arr2 = [
[1, 2, 3, 4, 5, 6],
[4, 1, 0, 9, 8, 7],
[1, 5, 2, 4, 5, 6],
[5, 0, 7, 5, 2, 1],
[6, 0, 5, 8, 7, 0],
[9, 3, 2, 9, 8, 7]
]
const arr3 =[
[-9, -9, -9,  1, 1, 1], 
[ 0, -9,  0,  4, 3, 2],
[-9, -9, -9,  1, 2, 3],
[ 0,  0,  8,  6, 6, 0],
[ 0,  0,  0, -2, 0, 0],
[ 0,  0,  1,  2, 4, 0]
]
const arr4 =[
[-9, -9, -9,  -1, -1, -1], 
[ 0, -9,  0,  -4, -3, -2],
[-9, -9, -9,  -1, -2, -3],
[ 0,  0,  -8,  -6, -6, -0],
[ 0,  0,  0, -2, 0, 0],
[ 0,  0,  -1, -2, -4, 0]
]
// hourglassSum(arr2)

// console.log('\n ',hourglassSum(array))
// console.log('\n ',hourglassSum(arr3))
console.log('\n ',hourglassSum(arr4))

//node hourglassSum.js