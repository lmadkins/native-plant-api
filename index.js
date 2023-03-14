// Dependencies & Config
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
require('./db/connection')

// const cors = require('cors');
app.set('port', process.env.PORT || 4000)

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
// app.use(cors());
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/plants');
});

// Controllers
const plantController = require('./controllers/plantController')
app.use(plantController)

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});

// Models
const Plant = require('./db/models/Plant')
// app.use('/api/plants')


// Port Connection

app.listen(port, () => {
  console.log(`App listening on port ${port} ✅`)
})