const express = require('express');
const router = express.Router();

router.use('/petstagram/users', require('./users'));
router.use('/petstagram/posts', require('./posts'));

module.exports = router;
