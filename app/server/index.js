const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/', async (ctx, next) => {
  ctx.body = 'home page'
})

router.all('*',async (ctx, next) => {
  ctx.body = 'react ssr'
})


app.listen(8082, () => {
  console.log('server stated port: 8082')
})