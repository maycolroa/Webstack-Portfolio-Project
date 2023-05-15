const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

// paths to create users
router.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
});


// method to obtain all the users that exist get
router.get('/users', (req, res) => {
  userSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
});

// method to get a special user by mongodb id 

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
});

// method to update a user's data

router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
  .updateOne({ _id: id }, { $set: { name, age, email } })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error}));
});

module.exports = router;