// Monday Morning Activity 1 and Part 1
// 2. Optional: Example 2 - Capitalizing Names:

const names = ['alice', 'bob', 'carol'];
const cb = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const capitalizedNames = names.map(namecb); 

console.log('Original Names:', names);
console.log('Capitalized Names:', capitalizedNames);