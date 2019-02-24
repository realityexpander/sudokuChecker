function sudokuCheck (boardStr) {

  if(boardStr === undefined)
    return 'invalid';

  let arr = [];

  arr = convertStrToArr(boardStr);

  for(let n=0; n<arr[0].length; n++) {
    if(checkRow(arr[n]) !== 9)
      return 'invalid';;
  }
  for(let n=0; n<arr[0].length; n++) {
    if(checkCol(arr, n) !== 9)
      return 'invalid';;
  }
  for(let y=1; y<=arr[0].length-1; y+=3) {
    for(let x=1; x<=arr[0].length-1; x+=3) {
      if (check3x3(arr, x, y) !== 9)
        return 'invalid';;
    }
  }
  return 'solved';

  function convertStrToArr(boardStr) {
    let arr = [];
    let tmp = boardStr.split('\n');
    for(let i=0; i<=tmp.length-1; i++) {
      arr[i] = tmp[i].split('');
    }
    return arr;
  }
  
  function checkRow(arr) {
    let res={}
    for(let n=0; n<arr.length; n++) {
      res[arr[n]]=arr[n];
    }

    return Object.keys(res).length;
  }
  
  function checkCol(arr, x) {
    let res={}
    for(let n=0; n<arr[0].length; n++) {
      res[arr[n][x]]=arr[n][x];
    }
    return Object.keys(res).length;
  }
  
  function check3x3(arr, x, y) {
    let res={}
    let raw=[]
    for(let j=y-1; j<=y+1; j++) {
      for(let i=x-1; i<=x+1; i++) {
        res[arr[i][j]] = arr[i][j];
        raw.push(arr[i][j])
      }
    }
    return Object.keys(res).length;
  }
  
}

// console.log(sudokuCheck('\
// 735814296\n\
// 896275314\n\
// 214963857\n\
// 589427163\n\
// 362189745\n\
// 471356982\n\
// 923541678\n\
// 648792531\n\
// 157638429'));

// console.log(sudokuCheck('\
// 795836421\n\
// 462195387\n\
// 381247956\n\
// 279458613\n\
// 654371892\n\
// 813629745\n\
// 147583269\n\
// 538962174\n\
// 926714538'));

// console.log(sudokuCheck('524698731\n\
// 967531824\n\
// 381742596\n\
// 719325648\n\
// 436871952\n\
// 258416379\n\
// 893154267\n\
// 672983415\n\
// 145267983'));

// console.log(sudokuCheck('895631472\n\
// 327984516\n\
// 461257398\n\
// 942813765\n\
// 183765924\n\
// 756429183\n\
// 578142639\n\
// 214398657\n\
// 639578241'));

// console.log(sudokuCheck('\
// 215873649\n\
// 734965812\n\
// 698412537\n\
// 387241965\n\
// 146597283\n\
// 471659328\n\
// 952386471\n\
// 563128794\n\
// 829734156'));

// console.log(sudokuCheck('\
// 895631472\n\
// 327984516\n\
// 461257398\n\
// 942813765\n\
// 183765924\n\
// 756429183\n\
// 578142639\n\
// 214396857\n\
// 639578241'));

// console.log(sudokuCheck('111111111\n\
// 222222222\n\
// 333333333\n\
// 444444444\n\
// 555555555\n\
// 666666666\n\
// 777777777\n\
// 888888888\n\
// 999999999'));

// console.log(sudokuCheck('123123123\n\
// 456456456\n\
// 789789789\n\
// 123123123\n\
// 456456456\n\
// 789789789\n\
// 123123123\n\
// 456456456\n\
// 789789789'));

// console.log(sudokuCheck('735814296\n\
// 896275314\n\
// 214963857\n\
// 589427163\n\
// 362189745\n\
// 471356982\n\
// 923541678\n\
// 648792531\n\
// 157638429'));

console.log(sudokuCheck("\
795836421\n\
462195387\n\
381247956\n\
279458613\n\
654371892\n\
813629745\n\
147583269\n\
538962174\n\
926714538"));


