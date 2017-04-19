const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

// Create app
const app = express();

app.use(express.static('./'));

app.listen(port, function () {
  console.log('Express is up and running on port 8000');
});
