function howManyHundreds(num){
  var bigNum = num;
  var remainderNum = num % 100; //divides numGiven by 100 and returns remainder
  var finalNum = bigNum - remainderNum; //takes remainder and subtracts from bigNum
  return finalNum / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);