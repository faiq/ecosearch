var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser') 
  , path = require('path')
  , http = require('http')
  , showIndex = require('./controllers/showIndex') 
  , makeSearch = require('./controllers/makeSearch') 
  , app = express()
  , server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(logger('dev'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', showIndex)   

app.post('/searchEco', makeSearch)

server.listen(3000, function(){
  console.log('listening on *:3000');
});
