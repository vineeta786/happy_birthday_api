const express = require('express');
const app = express();

app.get('/home/:name', function (req, res) {
    res.send("Happy Birthday, "+ req.params['name']+"!");
  })
app.listen(3000);