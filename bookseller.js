//Character with longest consecutive repetition

const stockList = (listOfArt, listOfCat)=>{
	console.log('listOfArt: ', listOfArt)
	console.log('listOfCat: ', listOfCat)
	const tempA=[];
	listOfArt.forEach(element => {
		let obj={};
		let cate = element.split(' ');
		obj.cat= cate[0];
		obj.count= cate[1];
		tempA.push(obj);
	});
	console.log('tempA: ', tempA);
	const sums=[];
	listOfCat.forEach(catLetter => {
		console.log('filtering category: ',catLetter);
		 const wantedCats = tempA.filter(cate => {
			return cate.cat.startsWith(catLetter);
			});
		console.log('filtered wantedCats: ', wantedCats);

	});
	
	
}


const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
const c = ["A", "B"]
const ab = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
const ac = ["A", "B", "C", "W"]
// console.log(stockList(b,c))
// console.log(stockList(ab, ac))
stockList(b,c)
// stockList(ab, ac)


//node bookseller.js