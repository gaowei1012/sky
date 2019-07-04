

import React from 'react'
import { Spin } from 'antd'
import './index.less'

const Index = ({text}) => <div className="spin-wrapper">
  <Spin/>
  { text && <p>{text}</p> }
</div>

export default Index