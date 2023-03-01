// Dependencies & Config
const express = require('express')
const app = express()
const port = 4000
app.set('port', process.env.PORT || 4000)

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Redirect
app.get('/', (req, res) => {
	res.redirect('/api');
});

// Controllers

// Models


// Port Connection

app.listen(port, () => {
  console.log(`App listening on port ${port} ✅`)
})