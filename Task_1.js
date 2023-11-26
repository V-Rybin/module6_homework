const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenCount = 0;
let oddCount = 0;

function evenAndOddNumber(){
   for (let i = 1; i < numbers.length; i++) {
       if (numbers[i] % 2 === 0) {
         evenCount++;
       } else {
         oddCount++;
       }

     }
     
     console.log(`Четные числа: ${evenCount}`);
     console.log(`Нечетные числа: ${oddCount}`);
    
};

evenAndOddNumber();

