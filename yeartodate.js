"use strict";
// Create a function that takes the age in years and returns the age in days.
const yearToDate = (year) => {
    let endYear = year;
    let days = 0;
    for (let startYear = 1; startYear <= endYear; startYear++) {
        days += 365;
    }
    return days;
};
console.log(yearToDate(25));
