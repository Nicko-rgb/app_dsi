const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload')
const {
    createPost,
    getFeedPosts,
    markAsViewed
} = require('../controllers/postController');

router.post('/create', upload.single('file'), createPost);
router.get('/feed/:id_user', getFeedPosts);
router.post('/visto', markAsViewed);

module.exports = router;
