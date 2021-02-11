let book1 = {
 name: 'JavaScript for FSWD',
 author: 'King of all of them',
 year: 1982 
}
let book2 = {
 name: 'JavaScript 2 for FSWD',
 author: 'Queen of all of them',
 year: 1990 
}
let bookUtils = {
 getFirstPublished: function(bookA, bookB){
  return publishedFirst = (bookA.year < bookB.year)? bookA : bookB;
 },
 setNewEdition: function(aBook, newEditionYear){
  return aBook.latestEdition = newEditionYear;  
 },
 setLanguage: function(aBook, aLanguage){
  return aBook.language = aLanguage;
 },
 setTranslation: function(aBook, aLanguage, aTranslator){
  aBook.translation = {
   language : aLanguage,
   Translator : aTranslator,
  };
   return aBook.translation;
  },

 setPublisher: function(aBook, aName, aLocation){
  aBook.publisher = {
   name: aName,
   location: aLocation
  };
  return aBook.publisher;
 },

 isSamePublisher: function(bookA, bookB){
   return ((bookA.publisher.name === bookB.publisher.name) && (bookA.publisher.location === bookB.publisher.location)) ? true : false;  
 }
}/*bookUtils END */


//7.3.3
console.log(bookUtils.getFirstPublished(book1, book2));
//7.3.4
console.log(bookUtils.setNewEdition(book2, 1995));
console.log(book2);
//7.3.5
//console.log(bookUtils.setLanguage(book1, 'English'));
bookUtils.setLanguage(book1, 'Arabic');
console.log(book1);
//7.3.6
bookUtils.setTranslation(book2, 'Arabic', 'Yonis');
console.log(book2.translation);
//7.3.7
bookUtils.setPublisher(book1, 'Keter', 'Akko');
console.log(book1.publisher);
//7.3.8
bookUtils.setPublisher(book2, 'Keter', 'Akko');
bookUtils.setPublisher(book1, 'Keter2', 'Akko');
console.log('isSamePublisher: \n','publisher 1, ',book1.publisher.name, 'publisher 2\n',book2.publisher.name,'\n are the same?!', bookUtils.isSamePublisher(book1, book2));


//cd bootcamp\BC_exercises\js 
//node 7.3-book_utilities.js