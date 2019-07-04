const articleModel = require('../lib/mysql')
const moment = require('moment')
const md = require('markdown-it')()


exports.getArticle = async ctx => {
  ctx.redirect('/article')
}

exports.getPosts = async (ctx, next) => {
  //ctx.redirect('/posts')
  ctx.body = 'get posts'

  await next
}

exports.insertPosts = async ctx => {
  let id = 122
  let author = 'anan'
  let createTime = 2010200
  let title = 'react'
  let content = 'nnmsm'
  let lastTime = 202002
  let mdxx = 'pingshi'
  let uid = 'ddss'
  let comments = 0
  let pv = 0
  // let = md 
  // let author = '执念'
  // let id = ctx.session.id;
  // let createTime = moment().format('MMMM Do YYYY, h:mm:ss a');

  await articleModel.insterPosts([id, author, title, content, createTime, lastTime, uid, md.render(mdxx), comments, pv])
    .then(() => {
      ctx.body = {
        code: 1,
        message: '发表文章成功'
      }
    })
    .catch(() => {
      ctx.body = {
        code: -1,
        message: '发表文章失败'
      }
    })
}