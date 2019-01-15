import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

import { fetchProjects, fetchFields } from "./actions/loadData";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchProjects());
store.dispatch(fetchFields());

export default store;
