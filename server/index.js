const express = require('express')
const app = express()

const port = 3001

app.get('/projects', (req, res, next) => {
  res.json(
[
  {
    "_id": "project_1",
    "label": "Project 1",
    "values": [
      {
        "fieldId": "field_1",
        "value": "Pågende"
      },
      {
        "fieldId": "field_3",
        "value": "Avslutat"
      }
    ]
  },
  {
    "_id": "project_2",
    "label": "Project 2",
    "values": [
      {
        "fieldId": "field_1",
        "value": "Pågende"
      },
      {
        "fieldId": "field_3",
        "value": "Avslutat"
      }
    ]
  }
]
  )
})

app.listen(port, () => {
 console.log("Server running at port: " + port)
})
