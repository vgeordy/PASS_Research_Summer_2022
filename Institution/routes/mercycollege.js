const { Router } = require('express')
var express = require('express')
const router = express.Router()
var bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: true }))


router.get('/', function (req, res) {
  res.sendFile(req.originalUrl + '/views/index.ejs')
})

router.get('/success', function (req, res) {
  res.send('success')
})

router.post('/register', function (req, res) {
  console.log(req.body)
  res.redirect('/success')
})


module.exports = router