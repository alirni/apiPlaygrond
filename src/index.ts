import express from 'express'
const app = express()
const port = 3030;

app.get('/test', (req, res) => {
  res.send('Hello World!')
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
