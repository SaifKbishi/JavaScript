"use strick";
//Invoke the printSuperPower function using the storm object as the context of the function.
//So your output should be: my super power is flying

const storm = {
    superPower: 'flying',
    /*
    printSuperPower: function () {
      console.log(storm.superPower);
      return this.superPower; //this referes to storm object
  }*/
};

function printSuperPower(){
  console.log('my superpower is ', this.superPower);
}
console.log('calling printSuperPower');
printSuperPower.call(storm);
/********************************************** */
console.log('pini');
const storm2 = {
  superPower: "flying",
  printSuperPower_1: printSuperPower_4,
};

function printSuperPower_4() {
  console.log("my super power is " + this.superPower);
}
storm2.printSuperPower_1();
