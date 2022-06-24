const express = require('express');
const router = express.Router();

router.use('/petstagram', require('./users'));
router.use('/petstagram/post', require('./posts'));

module.exports = router;
