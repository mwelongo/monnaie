const mongoose = require('mongoose')

/// Transaction Schema

const transactionSchema = new mongoose.Schema(
  {
    date: {type: String, format: Date},
    transaction: {type: String, required: true},
    amount: {type: Number, min: 1},
    confirmed: Boolean,
    receiver: String
  },
  {timestamps: true}
)
{date: "2000-01-01"}
sort = {timestamps: 1}
// collection.find({}, limit=10).sort(sort)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
