import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// 1. redux-thunk 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;