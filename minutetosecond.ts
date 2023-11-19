// Write a function that takes an integer minutes and converts it to seconds.

const minuteToSecond = (minute: number): number => {
    let seconds: number = minute * 60;
    return seconds;
}

console.log(minuteToSecond(5));