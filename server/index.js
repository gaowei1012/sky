const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')

const app = new Koa()
const router = new Router()
const logger = require('koa-logger')
const users = require('./api/users')
const about = require('./api/about')

// app.use(router.routes())
// app.use(router.allowedMethods())
app.use(bodyParser())
app.use(json())
app.use(logger())


app.use(users.routes()).use(users.allowedMethods())
app.use(about.routes()).use(about.allowedMethods())

app.listen(3030, () => {
  console.log('server statrd port 3030')
})