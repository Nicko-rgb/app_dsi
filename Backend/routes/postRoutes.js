const express = require('express');
const router = express.Router();
const {
    createPost,
    getFeedPosts,
    markAsViewed
} = require('../controllers/postController');

router.post('/create', createPost);
router.get('/feed/:id_user', getFeedPosts);
router.post('/visto', markAsViewed);

module.exports = router;
