const fs = require('fs');
fs.writeFile('output.txt', 'This is some sample data.', (err) => {
if (err) {
console.error('Error writing file:', err);
} else {
console.log('Data written to output.txt');
}
});