import { createStore, applyMiddleware, compose } from 'redux' 
import rootReducers from '../reducers'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

const serverStore = createStore(
  rootReducers,
  compose(
    applyMiddleware(
      // logger,
      thunk
    )
  )
)

export default serverStore
