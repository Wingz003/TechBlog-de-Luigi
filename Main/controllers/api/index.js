const router = require('express').Router();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

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


