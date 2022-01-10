const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    const blogs = blogData.map((blog) => blog.get({ plain: true }));


    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    const user = userData.get({ plain: true });

    res.render('dashboard', {
      blogs,
      user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res) => {
  try {

    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));


    res.render('login', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {

    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
  
});


router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;