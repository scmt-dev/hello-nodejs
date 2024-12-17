const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {  
  res.send({
    message: 'Hello World!'
  }).status(200)
})

app.post('/', (req, res) => {
  res.send({
    message: 'Hello World! POST'
  }).status(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})