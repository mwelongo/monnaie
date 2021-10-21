const mongoose = require('mongoose')

/// Transaction Schema

const transactionSchema = new mongoose.Schema(
  {
    date: Date,
    transaction: {type: String, required: true},
    amount: {type: Number, min: 1},
    confirmed: Boolean
  }
)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction