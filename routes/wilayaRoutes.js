const express = require('express');
const router = express.Router();
const wilayaRouter = require('./wilaya');

router.use('/wilayas', wilayaRouter);

module.exports = router;