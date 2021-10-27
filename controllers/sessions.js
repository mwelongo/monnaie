// SESSION DEPENDENCIES
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/user_data.js')

// Routes
sessions.get('/new', (req, res) => {
  res.render(
    'sessions/new_session.ejs',
    {currentUser: req.session.currentUser}
  )
})

// Post
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.send('oops ... the db had a problem')
    } else if (!foundUser) {
      res.send('<a href="/">Sorry, no user found</a>')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/')
      } else {
        res.send('<a href="/">Password does not match</a>')
      }
    }
  })
})

// Destroy session / Log Out
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

// MIDDLEWARE
module.exports = sessions
