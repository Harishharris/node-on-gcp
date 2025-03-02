const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(process.memoryUsage());
  res.send('Hello from the server');
});

app.get('/other', (req, res) => {
  console.log(process.memoryUsage());
  res.send('Hello from the other route');
});

app.get('/health', (req, res) => {
  res.send("I'm healthy");
});

app.listen(3000, () => {
  console.log('Server is running on PORT 3000');
});
