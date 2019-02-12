import openSocket from 'socket.io-client'
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { fetchProjects, fetchFields } from "./actions/loadData"

const socket = openSocket('http://localhost:3001')

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchProjects())
store.dispatch(fetchFields())
socket.on('storeEvent', store.dispatch)

export default store
