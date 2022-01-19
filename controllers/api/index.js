const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/blog', blogRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);


module.exports = router;

// BLOG
// get all blogs
// get blogs by id, include comments
// post
// put by id
// delete by id

// COMMENTS
// POST a new comment

// USER
// get


