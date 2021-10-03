const router = require('express').Router();
const { Comment } = require('../../models');

// Add a comment to a post 
router.post('/dashboard', async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      comment: req.body.comment,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

