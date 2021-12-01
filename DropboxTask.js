function textEditor2_2(queries) {
    const resultArray =[];
    let returnedText ='';
    let index = 0;
    let tempStr1 ='', tempStr2 = '';
    queries.forEach(op => {
        switch(op[0]){
            case 'APPEND':
            let t = op[1]
              returnedText = returnedText.concat(t);    
              resultArray.push(returnedText)
              console.log('returnedText:',returnedText)
              break;
            case 'MOVE':
              index = parseInt(op[1]);
              // returnedText.at(index); //at() in lab
              tempStr1=returnedText.substring(0, index);
              tempStr2=returnedText.substring(index+1);
            break;
            case 'DELETE':
             index = parseInt(op[1]);
            //  returnedText.substring(0, parseInt(op[1])).concat(returnedText.substring(parseInt(op[1])+1))
              returnedText = tempStr1.substring(0, index-1)
              console.log(returnedText)
              returnedText+= tempStr2;
            break;
        }
    });
    console.log('resultArray: ',resultArray)
    console.log('18 returnedText: ',returnedText)
}




queries = [
    ["APPEND", "Hey"],
    ["APPEND", " there"],
    ["APPEND", "!"],
    ["APPEND", "Hello! world!"],
    // ["MOVE", "5"],
    // ["DELETE"],
    // ["APPEND", ","]
]

textEditor2_2(queries)

//node DropboxTask.js