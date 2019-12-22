const express = require('express')
const port = 8080

let app = express()

app.get('/', (req,res) => {
  res.send('Hi, this is the Stanke/George family site.')
})

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})