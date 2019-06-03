const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})

app.get('/player', (req, res) => {
    res.send('This should get the player')
})
app.listen(3000, () => console.log('Server running on port 3000'))  