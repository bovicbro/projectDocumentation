import openSocket from 'socket.io-client'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { fetchProjects, fetchFields } from './actions/loadData'

import { LOAD_PROJECTS, LOAD_FIELDS } from './actions/actionTypes'

const socket = openSocket('')

socket.on('storeEvents', action => {
  action.isReceived = true
  console.log('Received: ', action)
  store.dispatch(action)
})

const FORWARD_BLACKLIST = [LOAD_PROJECTS, LOAD_FIELDS]
const emitEventsToSocket = store => next => action => {
  const result = next(action)
  if (!FORWARD_BLACKLIST.includes(result.type) && !action.isReceived) {
    console.log('Emitting: ', result)
    socket.emit('storeEvents', result)
  }

  return result
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, emitEventsToSocket)
)

store.dispatch(fetchProjects())
store.dispatch(fetchFields())

export default store
