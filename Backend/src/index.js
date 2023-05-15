const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.port || 9000;

// they are cran and they are called middleware
app.use(express.json());
app.use('/api', userRoutes);


// main routes  

app.get('/', (req, res) => {
  res.send('welcome my api');
}); 

// mongoDB connection implementation

mongoose
  .connect(process.env.mongoDB_uri)
  .then(() => console.log('connected to mongoDB'))
  .catch((error) => console.error(error))
  
app.listen(port, () => console.log('server run on port', port));
