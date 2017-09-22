function ageCalculator(name, yearOfBirth, currentYear) {
  var age;
  age = currentYear - yearOfBirth;
  var message = name + ' is ' + age + " years old.";
  console.log(message)
}

ageCalculator("Suzie", 1984, 2016);
ageCalculator("Jack", 2004, 2015);
ageCalculator("Ali", 2016, 2016);