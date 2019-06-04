const express = require('express')
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;

const app = express()

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const db = new Pool({
    user: process.env.ADMISSION_DB_USER,
    host: '18.188.89.217',
    port: 5432,
    database: 'farcryonline',
    password: null
});

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express and Postgres API'})
})

app.get('/player', (req, res) => {
    res.json({'message': 'This should get the player'})
})

app.post('/player', (req, res) => {
    try {
        const { rows } = db.query("SELECT * FROM player");
        return res.status(200).json(rows)
    } catch (error) {
        return res.status(400).json(error)
    }
})
app.listen(3000, () => console.log('Server running on port 3000'))  