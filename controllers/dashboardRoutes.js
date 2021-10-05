const router = require('express').Router();
const { Post } = require('../models');


router.get('/create-post', async (req, res) => {
    try {
        res.render('create-post')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        res.render('all-posts')
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

router.get('/single-post', async (req, res) => {
    try {
        res.render('single-post')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit-post', async (req, res) => {
    try {
        res.render('edit-post')
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;






// //GET post by ID
// router.get('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id);
//         if (!postData) {
//             res.status(404).json({ message: 'No post with this id!' });
//             return;
//         }
//         const post = postData.get({ plain: true });
//         res.render('single-post', post);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

// // Do I need both? 
// router.put('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id);
//         if (!postData) {
//             res.status(404).json({ message: 'No post with this id!' });
//             return;
//         }
//         const post = postData.get({ plain: true });
//         res.render('create-post', post);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

// //UPDATE a post 
// router.put('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!postData[0]) {
//             res.status(404).json({ message: 'No post with this id!' });
//             return;
//         }
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;