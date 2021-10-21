// Dependencies
const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions_data.js');
const Seed = require('../models/seed_data.js')


/// SEED DATA
router.get('/seed', (req, res) => {
  Transaction.create(Seed, (error, seedData) => {
    res.redirect('/transactions')
  })
})

/// -------------------------
/// ROUTES
/// -------------------------

/// CREATE
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('NEW')
  // Transaction.create(req.body, (err, newRecord) => {
  //   res.redirect('transactions')
  // })
})


/// EXPORT
module.exports = router
