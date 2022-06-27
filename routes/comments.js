const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comments');

router.get('/', commentController.index);
router.get('/:id', commentController.show);
router.post('/:userId', commentController.create);
router.put('/:id', commentController.edit);
router.delete('/:id', commentController.delete);

module.exports = router;
