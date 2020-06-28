const express = require('express');
const Router = express.Router;
const HomeController = require('../controller/home');

const router = new Router();

router.get('/', HomeController.index);

module.exports = router;