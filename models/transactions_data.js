const mongoose = require('mongoose')

/// Transaction Schema

const transactionSchema = new mongoose.Schema(
  {
    date: {type: String, format: Date},
    transaction: {type: String, required: true},
    amount: {type: Number, min: 1},
    confirmed: Boolean,
    receiver: String
  }
)
{date: "2000-01-01"}

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
