// USER DEPENDENCIES
const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/user_data.js')

// NEW
users.get('/new', (req, res) => {
  res.render(
    'users/new_user.ejs',
    {currentUser: req.session.currentUser}
  )
})

// POST
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (error, newUser) => {
    console.log(`Success, ${newUser} created`);
    res.redirect('/')
  })
})

module.exports = users
