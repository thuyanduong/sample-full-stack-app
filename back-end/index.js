const express = require('express')
const app = express()
const cors = require('cors');
const db = require('./db/config')
const PORT = process.env.PORT || 4000

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({message: "This Ann's API"})
})

app.get('/users', async (req, res) => {
  const results = await db.query("SELECT * FROM users ORDER BY id");
  const users = await results.rows;
  res.status(200).json(users)
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
