const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cors = require('cors')
const mongoose  = require('mongoose')
const ProjectModel = require('./models/projectModel')

// Database initiation
mongoose.connect('mongodb+srv://project-documentation:88LsBzKYsCdh8OKe@cluster0-7bwhk.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})

const project = new ProjectModel({label: 'hejsan', values: []})
project.save().then( (collection) => {
  console.log(collection);
 console.log('Saved something to db');
})

const port = 3001
const projects = [
  {
    _id: 'project_1',
    label: 'Project 1',
    values: [
      {
        fieldId: 'field_1',
        value: 'Pågende',
      },
      {
        fieldId: 'field_3',
        value: 'Avslutat',
      },
    ],
  },
  {
    _id: 'project_2',
    label: 'Project 2',
    values: [
      {
        fieldId: 'field_1',
        value: 'Pågende',
      },
      {
        fieldId: 'field_3',
        value: 'Avslutat',
      },
    ],
  },
]

const fields = [
  {
    _id: 'field_1',
    label: 'Field 1',
    type: 'text',
    isColumn: false,
  },
  {
    _id: 'field_2',
    label: 'Field 2',
    type: 'text',
    isColumn: false,
  },
  {
    _id: 'field_3',
    label: 'Field 3',
    type: 'text',
    isColumn: true,
  },
  {
    _id: 'field_4',
    label: 'Field 4',
    type: 'text',
    isColumn: true,
  },
]

app.use(cors)

app.get('/projects', (req, res, next) => {
  res.json(projects)
})

app.get('/fields', (req, res, next) => {
  res.json(fields)
})

io.on('connection', socket => {
  socket.on('storeEvents', action => {
    console.log('Got action: ', action)
    socket.broadcast.emit('storeEvents', action)
  })
})

server.listen(port, () => {
  console.log('Server running at port: ' + port)
})
