var raining = true;
var cold;
var temp = -41;

if (temp < -40 || temp > 40) {
  console.log("Maybe going outside isn't such a great idea..")
} else if (temp < 0 ) {
  console.log("Make sure to pick out a scarf!");
} else if (temp < 15) {
    console.log("Short sleeves won't cut it!");
} else {
    console.log("Short sleeves are fine.");
}


if (raining && temp < -40 || temp > 40) {
  console.log("Perhaps it's better to stay inside..");
} else if (raining) {
  console.log("Don't forget to bring your umbrella!");
} else if (!raining) {
  console.log("Leave your umbrella at home!");
}

if (temp > 15 || temp < 40) {
  var cold = false;
} else if (temp < 15) {
  var cold = true;
}

if (cold && !cold && temp < -40 || temp > 40) {
  console.log("");
} else if (cold) {
  console.log("Or maybe a rain jacket?");
} else if (cold = false) {
  console.log("You'll be fine.");
}


if (temp < -40 || temp > 40) {
  console.log("");
} else {
  console.log("Now you're ready to go outside!");
}