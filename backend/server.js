const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('DRESSCODE backend fut!');
});

app.listen(PORT, () => {
  console.log(`Backend szerver fut a http://localhost:${PORT} címen`);
});