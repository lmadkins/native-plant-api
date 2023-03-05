// Dependencies & Config
const express = require('express')
const app = express()
const port = 4000
require('./db/connection')

// const cors = require('cors');
app.set('port', process.env.PORT || 4000)

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(cors());
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/');
});

// Controllers
const plantController = require('./controllers/plantController')
app.use(plantController)

// Models
const Plant = require('./db/models/Plant')
// app.use('/api/plants')

// Port Connection

app.listen(port, () => {
  console.log(`App listening on port ${port} ✅`)
})