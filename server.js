const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files
const workshops = require('./routes/workshops');

// Load env variables
dotenv.config({
	path: './config/config.env',
});

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Initialize routers
app.use('/api/v1/workshops', workshops);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
});
