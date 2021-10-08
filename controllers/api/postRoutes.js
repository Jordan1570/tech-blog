const router = require('express').Router();
const { Post } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
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

//DELETE a post 
router.delete('/:id', async (req, res) => {
  try {
      const postData = await Post.delete(req.body, {
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
