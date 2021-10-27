// Dependencies
const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions_data.js')
const Seed = require('../models/seed_data.js')

// AUTH
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}
/// SEED DATA
router.get('/seed', (req, res) => {
  Transaction.create(Seed, (err, seedData) => {
    res.redirect('/transactions')
  })
})

/// -------------------------
/// ROUTES
/// -------------------------

// UPDATE/PUT
router.put('/:id', isAuthenticated, (req, res) => {
  if (req.body.confirmed === 'on') {
    req.body.confirmed = true
  } else {
    req.body.confirmed = false
  }
  console.log(req.body);
  Transaction.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, record) => {
    res.redirect('/transactions')
  })
})

// DELETE
router.delete('/:id', isAuthenticated, (req, res) => {
  Transaction.findByIdAndRemove(req.params.id, (err, record) => {
    res.redirect('/transactions')
  })
})

// PATCH
// router.patch('/', (req, res) => {
//   Transaction.find({}, (error, product) => {
//     res.render(`index.ejs`)
//   })
// })

// EDIT
router.get('/:id/edit', isAuthenticated, (req, res) => {
  // res.send('EDIT')
  Transaction.findById(req.params.id, (err, txRecord) => {
    res.render(
      'transactions/edit.ejs',
      {
        record: txRecord,
        currentUser: req.session.currentUser
      }
    )
  })
})

/// INDEX
router.get('/', isAuthenticated, (req, res) => {
  Transaction.find({}, (err, allRecords) => {
    res.render(
      'transactions/index.ejs',
      {
        records: allRecords,
        currentUser: req.session.currentUser
      }
    )
  })
})

//SORTING -- THIRD STAGE


/// NEW
router.get('/new/:txType', (req, res) => {
  res.render(
    'transactions/new.ejs',
    {
      txType: req.params.txType,
      currentUser: req.session.currentUser
    }
  )
})

/// NEW
// router.get('/new', (req, res) => {
//   res.render(
//     'transactions/new.ejs',
// {currentUser: req.session.currentUser}
//   )
// })

///SHOW
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  Transaction.findById(req.params.id, (err, txRecord) => {
    res.render(
      'transactions/show.ejs',
      {
        record: txRecord,
        currentUser: req.session.currentUser
      }
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
