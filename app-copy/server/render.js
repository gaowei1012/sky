
import React from 'react'
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Container from '../containers'

const serverRender = (req, store, context) => {
  const tempalte = fs.readFileSync(process.cwd() + '/public/static/index.html', 'utf8')
  const vendorsCss = fs.readFileSync(process.cwd() + '/public/static/css/vendors.css', 'utf8')
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <Container />
    </StaticRouter>
  )
  const cssStr = context.css.length ? context.css.join('\n') : ''

  return tempalte.replace('<!-- app -->', content)
    .replace('server-render-css', cssStr + vendorsCss)
}

export default serverRender
