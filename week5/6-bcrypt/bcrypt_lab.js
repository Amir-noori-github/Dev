const bcrypt = require('bcrypt');

// Function to hash a password
async function hashPassword() {
  const password = 'mySecurePassword'; // Replace with your password

  try {
    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('Password:', password);
    console.log('Salt:', salt);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to hash the password
hashPassword();

async function comparePassword() {
  const inputPassword = 'MyInsecurePassword';
  const hashedPassword = 'YourStoredHashedPassword';

  try{
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

    if (isMatch) {
      console.log('Password is correct.');
    } else {
      console.log('Password is incorrect.');
    }

  } catch (error) {
    console.error('Error: ', error);
  }
}

comparePassword();

const password = 'mySecurePassword';
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Synchronous Hashed Password: ', hashedPassword);
