const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const leaks = [];
  setInterval(() => {
    leaks.push(Buffer.alloc(1000000)); // 1MB allocations every second
  }, 1000);
  setInterval(() => {
    leaks.push(Buffer.alloc(1000000)); // 1MB allocations every second
  }, 1000);
  console.log(process.memoryUsage());

  res.send('Hello from the server');
});

app.listen(3000, () => {
  console.log('Server is running on PORT 3000');
});
