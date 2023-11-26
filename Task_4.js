function printNumbers (a, b){
  let value = a;
  let interval = setInterval(function () {
    console.log(value);
    if (value == b) {
      clearInterval(timer);
    }
    value++;
  }, 1000);
}

printNumbers (5, 15);