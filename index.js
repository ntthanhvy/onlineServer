const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express and Postgres API'})
})

app.get('/player', (req, res) => {
    res.json({'message': 'This should get the player'})
})

app.post('/player', (req, res) => {
    res.json({ 'message': 'This should create new player'})
})
app.listen(3000, () => console.log('Server running on port 3000'))  