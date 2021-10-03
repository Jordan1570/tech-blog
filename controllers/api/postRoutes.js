const router = require('express').Router();
const { Post } = require('../../models');

// CREATE new post
router.post('/dashboard', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
  });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
