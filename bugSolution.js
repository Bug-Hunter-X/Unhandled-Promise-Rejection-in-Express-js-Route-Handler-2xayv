const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    someAsyncOperation().then(() => {
      res.send('Hello World!');
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something went wrong!'); // Proper error handling
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
}