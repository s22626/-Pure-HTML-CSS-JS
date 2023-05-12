const express = require('express');
const app = express();
const port = 9393;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
