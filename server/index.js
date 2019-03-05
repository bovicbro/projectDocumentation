const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cors = require('cors')
const mongoose  = require('mongoose')
const ProjectModel = require('./models/projectModel')
const FieldModel = require('./models/fieldModel')

// Database initiation
mongoose.connect('mongodb+srv://project-documentation:88LsBzKYsCdh8OKe@cluster0-7bwhk.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})

const project = new ProjectModel({label: 'hejsan', values: []})
project.save().then( (collection) => {
 console.log(collection);
 console.log('Saved something to db');
})

const port = 3001


app.get('/projects', (req, res, next) => {
  ProjectModel.find({}, (error, docs) => {
    console.log(docs);
    res.json(docs)
  })
})

app.get('/fields', (req, res, next) => {
  FieldModel.find({}, (error, docs) => {
    console.log(docs);
    res.json(docs)
  })
})

io.on('connection', socket => {
  socket.on('storeEvents', action => {
    console.log('Got action: ', action)
    socket.broadcast.emit('storeEvents', action)
  })
})

app.use(cors)
server.listen(port, () => {
  console.log('Server running at port: ' + port)
})
