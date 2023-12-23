// create web server 
// 1. create web server
// 2. create router
// 3. create controller
// 4. create model

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
const auth = require('../middleware/auth');

router.post('/addComment', auth, commentController.addComment);
router.get('/getComments', commentController.getComments);
router.get('/getComments/:id', commentController.getCommentsById);
router.put('/updateComment/:id', auth, commentController.updateComment);
router.delete('/deleteComment/:id', auth, commentController.deleteComment);

module.exports = router;