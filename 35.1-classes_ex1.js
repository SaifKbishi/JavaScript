
class Animal{
 constructor(name, sound){
  this.name = name;
  this.sound = SOUND;
 }
 getName(){
  return this.name;
 }
 getSound(){
  return this.sound;
 }
print(){
 console.log(`name: ${this.getName()} age: ${this.getSound()}`);
}

}//class Animal

let animal1 = new Animal('Bear', 'growl');
let animal2 = new Animal('Wolf', 'howl');
let animal3 = new Animal('Lion', 'roar');



//cd bootcamp\BC_exercises\js 
//node 35.1-classes_ex1.js

