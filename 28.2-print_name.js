const bca = {
 name: 'myname',
 printName : function(){
  console.log('printName',this.name);
 },
 delayedName : function(){
  setTimeout(function(){ 
   console.log('delayedName',this.name);
  }, 1000);
 }
}

console.log(bca.printName());
console.log(bca.delayedName.bind(bca));
console.log(bca.delayedName.bind({name: 'dfsf'}));


//cd bootcamp\BC_exercises\js 
//node 28.2-print_name.js