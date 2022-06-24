const express = require('express');
const router = express.Router();

router.use('/petstagram', require('./users'));

module.exports = router;
