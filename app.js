const express = require('express')
const app = express()
const port = 3030

app.get('/test', (req, res) => {
  console.log('index.js:6 ????', {req});
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})