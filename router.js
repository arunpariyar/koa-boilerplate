"use strict";

//import and initiate the router
const Router = require("koa-router");
const router = new Router();

//import the controllers
const message = require("./controllers/message.controller.js");
