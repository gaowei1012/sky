import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const defaultStore = window.context && window.context.INITIAL_STATE
const clientStore = createStore(
  rootReducer,
  defaultStore,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  )
)

export default clientStore
