// should return a new array containing the first two drivers from the passed-in array ‣
// should be assigned to a constant
const returnFirstTwoDrivers = function (drivers) { return drivers.slice(0,2);
}

// + `returnLastTwoDrivers()` — Declare a variable with `const` that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the **last** two drivers in the array.
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

// + `selectingDrivers` — This is an array containing two elements: the two functions that we previously defined (`returnFirstTwoDrivers()` and `returnLastTwoDrivers()`).
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// createFareMultiplier() returns a function ‣
// should multiply a given value using the created multiplier
const createFareMultiplier = function(int){
  return function(fare) {
    return (fare * int);
  }
}
// fareDoubler() //  is a function // doubles fares

  const fareDoubler = createFareMultiplier(2);

  // fareTripler() // is a function ‣ // triples fares
  const fareTripler = createFareMultiplier(3);

  // selectDifferentDrivers(arrayOfDrivers, function)
  // returns the first two drivers when passed returnFirstTwoDrivers() as the second argument ‣
  // returns the last two drivers when passed returnLastTwoDrivers() as the second argument

 function selectDifferentDrivers (drivers, returnFirstTwoDrivers){
   return returnFirstTwoDrivers(drivers);
   return returnLastTwoDrivers(drivers);
 }
