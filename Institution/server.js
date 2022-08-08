const express = require('express')
const app = express()
const Institutionurl = 'localhost:3004/'

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const institutionRouter = require('./routes/institutions')
const mercyRouter = require('./routes/mercycollege')
app.use('/institutions', institutionRouter)
app.use('/mercycollege', mercyRouter)
app.listen(3004)