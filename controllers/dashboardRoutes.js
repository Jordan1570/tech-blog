const router = require('express').Router();
const { Post } = require('../../models');

// CREATE new post
router.post('/dashboard', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//GET post by ID
router.get('post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (!postData) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }
        const post = postData.get({ plain: true });
        res.render('single-post', post);
    } catch (err) {
        res.status(500).json(err);
    };
});

//UPDATE a post 
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!postData[0]) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;