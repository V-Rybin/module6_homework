function printNumbers(a, b) {
  let i = a;

  setTimeout(function Numbers() {
    console.log(i);
    if (i < b) {
      setTimeout(Numbers, 1000);
    }
    i++;
  }, 1000);
}

printNumbers(5, 15);