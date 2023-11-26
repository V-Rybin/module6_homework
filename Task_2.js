function getSumNum (a){
  return function(b){
     return a + b;

  }
}

console.log(getSumNum(4)(5));