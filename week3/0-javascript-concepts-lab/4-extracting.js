// Monday Morning Activity 1 and Part 1
// 4. Optional: Example 1 - Extracting Nested Properties

const person = { name: 'Alice',
                 info: { age: 30, 
                         occupation: 'Engineer' 
                        } 
                 };

const { name, info: { age, occupation } } = person;

console.log('Name:', name);
console.log('Age:', age);
console.log('Occupation:', occupation);