const Koa = require("koa");
// const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const MysqlStore = require("koa-mysql-session");
const session = require("koa-session-minimal");
const logger = require("koa-logger");
const json = require("koa-json");
const config = require("./config/idnex");

const app = new Koa();

const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
};

app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

app.use(bodyParser());
app.use(json());
app.use(logger());

// routes
app.use(require('./api/article').routes())

app.listen(3030, () => {
  console.log("server statrd port 3030");
});
