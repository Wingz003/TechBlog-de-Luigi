const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {

    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
           
          });
          res.status(201).json(commentData);
    } catch (error) {
        res.status(500).json(error);

    }
})
module.exports = router;