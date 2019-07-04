const router = require('koa-router')()
const controller = require('../controller/article')

router.get('/', controller.getArticle)

router.get('/api/article', controller.getPosts)

router.get('/api/article/insert', controller.insertPosts)

module.exports = router
