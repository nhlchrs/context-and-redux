import {compose, createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {rootReducer} from '../Reducers'
const applyMiddlewareEnhancer = applyMiddleware(logger, thunk);
const composeEnhancer = compose(applyMiddlewareEnhancer) ||  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store= createStore(rootReducer, composeEnhancer);
export default store;