const express = require('express')
const router = express.Router()
const TweetController = require('./controllers/tweet_controller')

router.get('/', TweetController.read)
router.post('/tweets', TweetController.create)
router.get('/tweets/:id', TweetController.show)
router.put('/tweets/:id', TweetController.update)
router.delete('/tweets/:id', TweetController.destroy)

module.exports = router
