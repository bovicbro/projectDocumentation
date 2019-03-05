const projectHandler = require('./projectHandler')

const ActionHandler = {
  handlers: [projectHandler],

  handleAction: (action, res) => {
    ActionHandler.handlers.forEach(handler => handler.handleAction(action, res))
  },
}

module.exports = ActionHandler
