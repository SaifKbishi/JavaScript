var library = [
  {
   author: "Bill Gates",
   title: "The Road Ahead",
   readingStatus: true
  },
  {
   author: "Steve Jobs",
   title: "Walter Isaacson",
   readingStatus: true
  },
  {
   author: "Suzanne Collins",
   title: "Mockingjay: The Final Book of The Hunger Games",
   readingStatus: false
  }
 ];
function booksCanBeRead(array){
 library.forEach(book=> {
  if(book.readingStatus){
   console.log(book);
  }
 });
}
booksCanBeRead(library);
//cd bootcamp\BC_exercises\js 
//node 11.1-libary.js