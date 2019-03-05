const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cors = require('cors')
const mongoose = require('mongoose')
const ProjectModel = require('./models/projectModel')
const FieldModel = require('./models/fieldModel')
const ActionHandler = require('./actionHandlers/actionHandler')

// Database initiation
mongoose.connect(
  'mongodb+srv://project-documentation:88LsBzKYsCdh8OKe@cluster0-7bwhk.gcp.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true }
)

const port = 3001

app.get('/projects', (req, res, next) => {
  ProjectModel.find({}, (error, docs) => {
    res.json(docs)
  })
})

app.get('/fields', (req, res, next) => {
  FieldModel.find({}, (error, docs) => {
    res.json(docs)
  })
})

io.on('connection', socket => {
  socket.on('storeEvents', action => {
    ActionHandler.handleAction(action, event => {
      console.log('EMITTTING: ', event)
      socket.broadcast.emit('storeEvents', event)
    })
  })
})

app.use(cors)
server.listen(port, () => {
  console.log('Server running at port: ' + port)
})
