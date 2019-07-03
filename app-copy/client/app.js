/**
 * react ssr client app
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Container from './../containers'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import clientStore from '../store/clientStore'

const root = document.querySelector('#root')

// 模块热更替
if(module.hot) {
  module.hot.accept(() => {
    const NextApp = require('./../containers/index.js').default
    ReactDOM.render(
      <AppContainer>
        <Provider store={clientStore}>
          <BrowserRouter>
            <NextApp />
          </BrowserRouter>
        </Provider>
      </AppContainer>
    , root)
  })
}

ReactDOM.hydrate(
  <AppContainer>
    <Provider store={clientStore}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </Provider>
  </AppContainer>
, root)
