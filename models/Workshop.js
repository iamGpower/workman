const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name cannot be more than 50 characters'],
	},
	slug: String,
	description: {
		type: String,
		required: [true, 'Please add a description'],
		maxlength: [500, 'Description cannot be more then 500 characters'],
	},
	mobile: {
		type: String,
		maxlength: [11, 'Phone number can not be longer than 20 characters'],
	},
	email: {
		type: String,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please add a valid email',
		],
	},
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	location: {
		// GeoJSON Point
		type: {
			type: String,
			enum: ['point'],
			// required: true,
		},
		coordinates: {
			type: [Number],
			// required: true,
			index: '2dsphere',
		},
		formattedAddress: String,
		street: String,
		city: String,
		state: String,
		zipcode: String,
		country: String,
	},
	services: {
		type: [String],
		required: true,
		enum: [
			'Painter',
			'Auto-Mechanic',
			'Auto-Electrician',
			'Electrician',
			'Barber',
			'Hair Stylist',
			'Laundry',
			'Chef',
			'Tailor',
			'Others',
		],
	},
	averageRating: {
		type: Number,
		min: [1, 'Rating must be at least 1'],
		max: [10, 'Rating cannot be more than 10'],
	},
	averageServiceCharge: Number,
	photo: {
		type: String,
		default: 'no-photo.jpg',
	},
	serviceBooking: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Workshop', WorkshopSchema);
