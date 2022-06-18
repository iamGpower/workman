const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({
	path: './config/config.env',
});

// Connect to DB
connectDB();

// Route files
const workshops = require('./routes/workshops');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Initialize routers
app.use('/api/v1/workshops', workshops);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`);
});

// Global Handler for promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error on App 🤢 => ${err.message}`);

	// Close server and exit process
	server.close(() => process.exit(1));
});
