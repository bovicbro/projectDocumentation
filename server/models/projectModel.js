const mongoose = require('mongoose')

const projectValueSchema = new mongoose.Schema({
  fieldId: mongoose.ObjectId,
  value: String
})

const projectSchema = new mongoose.Schema({
  label: String,
  values: [projectValueSchema]
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
