const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts');

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/:userId', postController.create);
router.put('/:id', postController.edit);
router.put('like/:id/:userId', postController.editLikes);
router.put('fave/:id/:userId', postController.editFaves);
router.delete('/:id', postController.delete);

module.exports = router;
