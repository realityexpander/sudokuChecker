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



