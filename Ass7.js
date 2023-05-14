function secondSymbol(s, symbol) {
    var copyStr=s;
    let IncludesChar = copyStr.includes(symbol);
    if(IncludesChar==true){
        allIndexes(s,symbol);
    }
    else{
        return -1;
    }
  }
  function allIndexes(s,symbol){
    const arr1=[];
    for(var i=0;i<s.length;i++){
        if(s.charAt(i)==symbol){
        arr1.push(i);
    }
    }
    if (arr1.length>1){
       return (arr1[1]);
    }
    else{
        return -1;
    }
  }
  //allIndexes('Hello world!!!','l')
  secondSymbol('Hello world!!!','l')