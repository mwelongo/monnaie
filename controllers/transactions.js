// Dependencies
const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions_data.js')
const Seed = require('../models/seed_data.js')


/// SEED DATA
router.get('/seed', (req, res) => {
  Transaction.create(Seed, (err, seedData) => {
    res.redirect('/transactions')
  })
})

/// -------------------------
/// ROUTES
/// -------------------------

/// INDEX
router.get('/', (req, res) => {
  Transaction.find({}, (err, allRecords) => {
    res.render(
      'transactions/index.ejs',
      {
        records: allRecords
      }
    )
  })

})

/// NEW
router.get('/new', (req, res) => {
  res.render('transactions/new.ejs')
})

///SHOW
router.get('/:id', (req, res) => {
  Transaction.findById(req.params.id, (err, txRecord) => {
    res.render(
      'transactions/show.ejs',
      {record: txRecord}
    )
  })

})

/// CREATE
router.post('/', (req, res) => {
  // res.send(req.body)
  if (req.body.confirmed === 'on') {
    req.body.confirmed = true
  } else {
    req.body.confirmed = false
  }
  console.log(req.body);
  Transaction.create(req.body, (err, newRecord) => {
    res.redirect('/transactions')
  })
})



/// EXPORT
module.exports = router
