const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({});

        const posts = postData.map((posts) => posts.get({ plain: true }));

        res.render('all-posts', {
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/logout', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', (req, res) => {
    try {
        console.log(req.params)

        Post.findByPk(req.params.id).then(postData => {

            const post = postData.get({ plain: true });


            res.render('single-post', {
                post,
            })
        });

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
