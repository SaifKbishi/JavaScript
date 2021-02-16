
function steps(n){
 for(let i=1; i< n+1; i++)
 {
  for(let j=1;j<=i; j++)
  {
   process.stdout.write('#');
  }
  for(let k=n-i;k>=1; k--)
  {
   process.stdout.write('$');  
  }  
  console.log('');
 }
}
steps(6);

//cd bootcamp\BC_exercises\js 
//node 13.4-steps.js