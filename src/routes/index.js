const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const authRouter = require('./auth.route');

const router = express.Router();

router.use('/auth', authMiddleware, authRouter);

module.exports = router;
