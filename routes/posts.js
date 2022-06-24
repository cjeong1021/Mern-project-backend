const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts');

router.get('/', postController.index);
// router.get('/:id', userController.show);
// router.post('/', userController.create);
// router.put('/:id', userController.edit);
// router.delete('/:id', userController.delete);

module.exports = router;
