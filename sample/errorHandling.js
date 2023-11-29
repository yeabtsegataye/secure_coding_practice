//1...Try-Catch Blocks:

try {
    // Code that may throw an error
    throw new Error('Something went wrong');
  } catch (error) {
    // Handle the error
    console.error('Caught an error:', error.message);
  }

//////////////////////////////////////////////////////////////////////////////////////////////

//2..Callback Functions:

const fs = require('fs');

fs.readFile('nonexistent-file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('File content:', data);
});
//////////////////////////////////////////////////////////////////////////////////////////////

//3..Promises

const readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  };
  
  readFilePromise('nonexistent-file.txt')
    .then((data) => console.log('File content:', data))
    .catch((err) => console.error('Error reading file:', err.message));

//////////////////////////////////////////////////////////////////////////////////////////////

//4..Async/Await:

const readFileAsync = util.promisify(fs.readFile);

async function readFile(filename) {
  try {
    const data = await readFileAsync(filename, 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

readFile('nonexistent-file.txt');

//////////////////////////////////////////////////////////////////////////////////////////////

//5..Express Middleware Error Handling:

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  // Simulate an error
  next(new Error('Something went wrong'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Internal Server Error');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//////////////////////////////////////////////////////////////////////////////////////////////