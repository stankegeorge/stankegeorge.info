const express = require('express')
const hbs = require('express-handlebars')
const port = 8080

let app = express()

app.set('view engine', 'hbs')

app.engine('hbs', hbs ({
  extname: 'hbs',
  defaultview: 'default',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}))

app.get('/', function(req,res,next) {
  res.render('home', {layout: 'default', template: 'home-template'})
})

app.get('/sam',(req, res) => {
  res.render('sam', {layout: 'default', template: 'sam'})
})

app.get('/wyatt',(req, res) => {
  res.render('wyatt', {layout: 'default', template: 'sam'})
})

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})