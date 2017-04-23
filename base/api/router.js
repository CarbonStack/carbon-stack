const express = require('express')
const router = express.Router()
const session = require('./routes/session')
const rendezvous = require('./routes/rendezvous')

router.get('/', (req, res, next) => {
  res.json({
    message: 'wwa'
  })
})

router.get('/session', session.show)
router.delete('/session', session.destroy)

router.get('/rendezvous', rendezvous.index)

module.exports = router
