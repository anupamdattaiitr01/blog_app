const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
      res.send('Server set up is successful');
});

app.listen(port, () => {
      console.log(`Server is listening successfully on port ${port}`);
});