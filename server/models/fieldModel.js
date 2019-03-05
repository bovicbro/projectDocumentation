const mongoose = require('mongoose')

const fieldSchema = new mongoose.Schema({
  label: String,
  type: String,
  isColumn: Boolean
})

const Field = mongoose.model('Field', fieldSchema)

module.exports = Field
