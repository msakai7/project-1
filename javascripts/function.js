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
  let currentMaximum = numbers[0];
  numbers.forEach(x => {
    if (x > currentMaximum) {
      currentMaximum = x;
    }
  });
  return currentMaximum;
};

//Req.3d
let sumEvens = arr => {
  let sum = 0;
  for (x of arr) {
    if (x % 2 == 0) {
      sum = sum + x;
    }
  }
  return sum;
};
