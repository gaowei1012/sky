const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

router.post('/detail', async (ctx, next) => {
  ctx.body = 'detial'

  await next()
})


module.exports = router
