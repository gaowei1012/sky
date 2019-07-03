const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})


router.post('/about', async(ctx, next) => {

  ctx.body = '/about'

  await next()
})


module.exports = router
