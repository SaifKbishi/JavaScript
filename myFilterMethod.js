const object = [
  { name: "Timmy", lan: "English", id: 1 },
  { name: "jimmy", lan: "English", id: 2 },
  { name: "Martha", lan: "Hebrew", id: 3 },
];

const myFilter = (arr, callback) => {
  debugger;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
const filterName2 = (el) => {
  return el.lan === "English";
};

const myFiltered = myFilter(object, filterName2);
console.log(myFiltered);
