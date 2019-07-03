import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import routes from '../routes'

class Container extends Component {
  render() {
    <div>
      <div>header</div>
      {renderRoutes(routes)}
      <div>footer</div>
    </div>
  }
}

export default withRouter(Container)
