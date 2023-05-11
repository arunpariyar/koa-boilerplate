"use strict";
//import koa
const Koa = require("koa");
//create instance of koa server
const app = new Koa();
//import  koa-static for serving static files
const serve = require("koa-static");
//import koa-body parser for parsing request from client
const bodyParser = require("koa-bodyparser");
