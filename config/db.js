const mongoose = require('mongoose');

const connectDB = async () => {
	const options = {};
	// try {
	// } catch (error) {
	// 	console.log(error.message);
	// }
	const conn = await mongoose.connect(process.env.MONGO_URI, options);
	console.log(`MongoDB Connected ${conn.connection.host}`);
};

module.exports = connectDB;
