// jshint esversion: 6

//Req. 3b
let arrAvg = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

//Req.3c
let arrMax = numbers => {
  let currentMaximum = -Infinity;
  numbers.forEach(function(numbers) {
    if (number > currentMaximum) {
      currentMaximum = number;
    }
  });
  return currentMaximum;
};

//Req.3d
let sumEvens = arr => {
  let sum = 0;
  for (sum of even) {
    sum += even;
  }
  console.log(sumEvens);
};
