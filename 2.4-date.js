let d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


console.log('Name of the current day: ',days[d.getDay()]);
console.log('Current day of the month: ',d.getDate());
console.log('Current month: ', months[d.getMonth() ]);
console.log('Current Year: ', d.getFullYear());

function myDate(){
 console.log(`\n\nToday is ${days[d.getDay()]} the ${d.getDate()} of ${months[d.getMonth() ]}, ${d.getFullYear()}`);
}

myDate();