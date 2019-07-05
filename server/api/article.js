const router = require('koa-router')()
const controller = require('../controller/article')

router.get('/', controller.getArticle)

router.get('/api/getALLArtcile', controller.getAllArtcile)

router.post('/api/article/insert', controller.insertArticle)

router.post('/api/article/update', controller.updateArticle)

router.post('/api/article/delete', controller.deleteArticle)

module.exports = router
