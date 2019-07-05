const articleModel = require("../lib/mysql");
const moment = require("moment");
const md = require("markdown-it")();

exports.getArticle = async ctx => {
  // 跳转回article页面
  ctx.redirect("/");
};

// 更新文章
exports.insertArticle = async ctx => {
  let { title, content, createTime, lastTime, mdx, comment } = ctx.parmas;

  let createTime = moment().format("YYYY:MM:DD");
  let lastTime = createTime;

  let result = await articleModel.insterPosts([
    title,
    content,
    createTime,
    lastTime,
    md.render(mdx),
    comment
  ]);
  if (result) {
    ctx.body = {
      code: 1,
      message: "文章发表成功"
    };
  } else {
    ctx.body = {
      code: -1,
      message: "文章发表失败"
    };
  }
};

// 获取全部文章
exports.getAllArtcile = async ctx => {
  // 拿到全部文章并返回
  let result = await articleModel.getArticle();
  console.log(result);
  if (result) {
    ctx.body = {
      code: 1,
      result
    };
  } else {
    ctx.body = {
      code: -1,
      message: "查询文出错"
    };
  }
};

// 更新一篇文章
exports.updateArticle = async ctx => {
  let { title, content, mdx } = ctc.parmas;
  let id = ctx.session.id; // 拿到当前用户id

  let result = await articleModel.updateArticle([
    title,
    content,
    md.render(mdx),
    id
  ]);
  if (result) {
    ctx.body = {
      code: 1,
      result
    };
  } else {
    ctx.body = {
      code: -1,
      message: "更新文章失败"
    };
  }
};

// 删除一篇文章
exports.deleteArticle = async ctx => {
  let id = ctx.session.id; // 拿到当前用户的id
  let result = await articleModel.deleteArticle([id]);
  if (result) {
    ctx.body = {
      code: 1,
      result
    };
  } else {
    ctx.body = {
      code: -1,
      message: '删除失败'
    };
  }
};

