const Koa = require("koa");
// const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const MysqlStore = require("koa-mysql-session");
const sessionMysql = require("koa-session-minimal");
const sessionRedis = require('koa-generic-session');
const Redis = require('koa-redis');
const logger = require("koa-logger");
const json = require("koa-json");
const cors = require('koa2-cors');
const config = require("./config/idnex");

const app = new Koa();

const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
};

// mysql seesion
app.use(sessionMysql({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// redis session
app.keys = ['blogs', 'keyskeys'];
app.use(sessionRedis({key: 'blogs', prefix: 'blogs:uid', store: new Redis()}))

app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(logger());

// routes
app.use(require('./api/article').routes())

app.listen(3030, () => {
  console.log("server statrd port 3030");
});
