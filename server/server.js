//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const trails = require('./routes/trails');

//CONSTANTS
const PORT = process.env.PORT  || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));


app.use('/trails', trails);
app.use(express.static('pubic'));


app.get('/', (req,res) => {
  res.send('smoke')
})


app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON ${PORT}`)
});