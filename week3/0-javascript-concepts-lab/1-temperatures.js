
// Monday Morning Activity 1 and Part 1
// 1. Optional: Example 1 - Converting Temperatures to Kelvin:

const temperaturesCelsius = [0, 15, 30, 45];
const cb = (celsius) => celsius + 273.15
const temperaturesKelvin = temperaturesCelsius.map(cb);

console.log('Celsius Temperatures:', temperaturesCelsius);
console.log('Kelvin Temperatures:', temperaturesKelvin);