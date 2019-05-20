const express = require('express');
const router = express.Router();
const blog_controller = require('../controllers/blog.controller');

router.get('/', blog_controller.blog_all);
router.get('/:id/update', blog_controller.blog_details);
router.post('/', blog_controller.blog_create);
router.put('/:id/update', blog_controller.blog_update);
router.delete('/:id/delete', blog_controller.blog_delete);

module.exports = router;