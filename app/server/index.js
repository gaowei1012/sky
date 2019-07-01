import Koa from 'koa'
import Router from 'koa-router'
import Static from 'koa-static'
import compression from 'compression'


const app = new Koa()
const router = new Router()

const isDev = process.env.NODE_NEV === 'development'

app.use(Static('public'))
if (isDev) {
  app.use(compression())
}

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/', async (ctx, next) => {
  ctx.body = 'home page'
  await next()
})

router.all('*', async (ctx, next) => {
  ctx.header("Access-Control-Allow-Origin", "*");
  ctx.header("Access-Control-Allow-Headers", "X-Requested-With");
  ctx.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  ctx.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  await next();
})


app.listen(8082, () => {
  console.log('server stated port: 8082')
})