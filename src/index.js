const express = require('express')
const port = 8080

let app = express()

app.get('/', (req,res) => {
  res.send('Hi, this is the Stanke/George family site.')
})

app.get('/sam', (req,res) => {
  res.send('<h1>I am Sam and I am 8 years old.</h1><p>Do you like my typing?</p>')
})

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})