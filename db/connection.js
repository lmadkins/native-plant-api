require('dotenv').config()
const mongoose = require('mongoose')

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;


// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));


db.on('open', () => {
	console.log('Mongo connection made! ✅ ');
});

module.exports = mongoose;