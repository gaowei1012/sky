const router = require('koa-router')();
const contorller = require('../controller/users');

router.get('/', contorller.getUserPage);

router.post('/api/user/signup', contorller.insertSignup);

router.post('/api/user/signin', contorller.userSignin);

router.post('/api/user/verify', contorller.getVerify);

module.exports = router;