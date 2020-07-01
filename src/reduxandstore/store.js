import reducer from './reducer'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import logger from 'redux-logger'
import { createStore, applyMiddleware} from 'redux'

const store= createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;