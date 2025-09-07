// Monday Morning Activity 1 and Part 1
// Understanding Map() method

const numbers = [2, 4, 6, 8, 10];
const cb = (x) => x*2
const doubleNumbers = numbers.map(cb);

console.log('Original Numbers:', numbers);
console.log('Doubled Numbers:', doubleNumbers);