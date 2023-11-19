// Create a function that takes the age in years and returns the age in days.

const yearToDate = (year: number): number => {
    let endYear: number = year;
    let days: number = 0;
    for (let startYear: number = 1; startYear <= endYear; startYear++) {
        days += 365;
    }
    return days;
}

console.log(yearToDate(25));