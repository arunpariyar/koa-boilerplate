"use strict";
//import koa
const Koa = require("koa");
//create instance of koa server
const app = new Koa();

//import  koa-static for serving static files
const serve = require("koa-static");

//config files
const conf = require("./config");
app.use(serve(conf.clientPath));

//import koa-body parser for parsing request from client
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const router = "./router";

const port = 3001;

app.listen(port, () => {
  console.log("server running at port ", port);
});

// (async function bootstrap() {
//   try {
//     app.listen(3001);
//   } catch (error) {
//     console.log("bootstrap error", error);
//   }
// })();
