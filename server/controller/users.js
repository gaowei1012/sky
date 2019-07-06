const Qcloudsms = require('qcloudsms_js');
const Redis = require('koa-redis');
const { sms, redis } = require('../utils/config');
const bcrypt = require('bcryptjs');
const userModel = require('./../lib/mysql');
const { getSalt, hashPass } = require('../utils/salt');

// create redis store
const Store = new Redis().client;

exports.getUserPage = async ctx => {
  ctx.redirect('/')
}

/*
exports.getPhoneCode = async ctx => {

  let phoneNumber = ctx.request.body;// 手机号码

  let qcloudsms = Qcloudsms(sms.appid, sms.appKey);

  // 简单处里函数
  function callback(err, res, resData) {
    if (err) throw new Error(err)
    console.log('res: ' + res.req)
    console.log('resData: ' + resData)
  }

  // 发送短信验证码
  let ssender = qcloudsms.SmsSingleSender()
  let result = ssender.sendWithParam(sms.yz, sms.phone, sms.render(sms.code), "", "", callback)

  if (!result) {
    ctx.body = {
      code: -1,
      message: '获取验证码失败，请检查你的网络'
    }
  } else {
    ctx.body = {
      code: 1,
      message: '发送验证码成功'
    }
  }

  // 将验证码信息写入到redis数据库

}
*/

exports.getVerify = async (ctx, next) => {
  let username = ctx.request.body;
  const saveExpire = await Store.hget(`nodecode:${username}`, 'expire');
  // 判断验证码获取失效是否过期
  if(saveExpire && new Date().getTime() - saveExpire < 0 ) {
    // 如果过期
    ctx.body = {
      code: -1,
      message: '请求过于频繁，请一分钟后再试'
    }
    return false
  }

  // 发送验证码
  let phone = ctx.request.body;

  let qcloudsms = Qcloudsms(sms.appid, sms.appKey);

  function callback (err, res, resData) {
    if (err) throw new Error(err);
    console.log('res req'+res.req)
    console.log('resData'+resData)
  }

  // 发送单条短信验证码
  const ssender = qcloudsms.SmsSingleSender()
  const result = ssender.sendWithParam(sms.yz, phone, sms.render(sms.code), "", "", callback)
  // 验证码发送成功
  if (result) {
    ctx.body = {
      code: 1,
      message: '验证码发送成功'
    }
  }
  
  await next()

}

exports.insertSignup = async (ctx, next) => {
  let {username, password, code, phone} = ctx.request.body;
  if(code) {
    const saveExpire = await Store.hget(`nodecode:${username}`, 'expire');
    const saveCode = await Store.hget(`nodecode:${username}, 'code`)

    if (code === saveCode) {
      if(new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          message: '验证码已过期,请重新获取'
        }
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        message: '请填写正确的验证码'
      }
      return false;
    }
  } else {
    ctx.body = {
      code: -1,
      message: '请填写验证码'
    }
  }

  // 注册
  // let salt = bcrypt.genSaltSync(10)
  // let newPassword = bcrypt.hashSync(password, salt)
  let newPassword = hashPass(password, getSalt)
  let newPhone = hashPass(phone, getSalt)
  // let newPhone = bcrypt.hashSync(phone, salt)
  const result = await userModel.insertUser([username, newPassword, newPhone])

  if (result) {
    ctx.body = {
      code: 1,
      message: '注册成功'
    }
  } else {
    ctx.body = {
      code: -1,
      message: '注册失败'
    }
  }

  await next()
}


exports.userSignin = async ctx => {
  let { username, password } = ctx.request.body;

  let newPassword = await getSalt(password);

  let result = await userModel.findOneceUser([username, newPassword])

  if (result) {
    ctx.body = {
      code: 1,
      message: '登陆成功'
    }
  } else {
    ctx.body = {
      code: -1,
      message: '登录失败'
    }
  }
}