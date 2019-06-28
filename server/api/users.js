const Router = require('koa-router')

const router = new Router({
  prefix: '/users'
})

router.get('/getUserName', async (ctx, next) => {
  ctx.body = 'users'
  await next()
})

router.post('/signin', async (ctx, next) => {
  ctx.body = 'signin'
})

router.post('/signup', async (ctx, next) => {
  ctx.body = 'signup'
})

router.post('/exit', async (ctx, next) => {
  ctx.body = 'exit'
})

module.exports = router