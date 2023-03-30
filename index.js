// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
};

console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arr);
}

function selectDifferentDrivers(arr, returnLastTwoDrivers){
    return returnLastTwoDrivers(arr);
}