const ProjectModel = require('../models/projectModel')

const createProject = label => {
  const project = new ProjectModel({ label, fields: [] })
  return project.save()
}

const projectHandler = {
  handleAction: (action, res) => {
    switch (action.type) {
      case 'CREATE_PROJECT':
        createProject(action.payload).then(project => {
          res({
            type: 'NEW_PROJECT',
            payload: project,
          })
        })
    }
  },
}

module.exports = projectHandler
