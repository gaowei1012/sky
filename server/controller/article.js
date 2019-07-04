const articleModel = require('../lib/mysql')


exports.getArticle = async ctx => {
  ctx.redirect('/article')
}


exports.getPosts = async ctx => {
  // TODO
}