function ageCalculator(name, yearOfBirth, currentYear) {
  var age;
  age = currentYear - yearOfBirth;
  return age
}

console.log("Suzie is " + ageCalculator("Suzie", 1984, 2016) + " years old.");
console.log("Jack is " + ageCalculator("Jack", 2004, 2016) + " years old.");
console.log("Ali is " + ageCalculator("Ali", 2016, 2016) + " years old.");