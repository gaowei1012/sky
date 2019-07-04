import React from 'react'
import withStyle from '../../utils/withStyle'
import footerStyles from './style/index.less'
import './style/index.less'

class Footer extends React.Component {
  render() {
      return <div id="foot">
        <div className="inner">
          <span>陕ICP备180XXX号-1</span>
        </div>
      </div>
  }
}

export default withStyle(Footer, footerStyles)
