const router = require('koa-router')()
const controller = require('../controller/article')

router.get('/', controller.getArticle)

router.post('/article', controller.getPosts)

module.exports = router
