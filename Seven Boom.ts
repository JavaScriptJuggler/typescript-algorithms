// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const calculate = (a: number[]): string => {
    let getArray: number[] = a;
    let result: string = '';
    let results = getArray.map((element) => {
        let getnumbers = element.toString().split('').map(Number);
        if (getnumbers.includes(7)) {
            return 'Boom!';
        }
        return null; // Return null for elements without '7'
    });

    if (results.includes('Boom!')) {
        return 'Boom!';
    } else {
        return 'there is no 7 in the array';
    }
}

console.log(calculate([2, 6, 7, 9, 3]))