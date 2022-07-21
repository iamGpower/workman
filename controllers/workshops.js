const Workshop = require('../models/Workshop');

// @desc    Get all workshops
// @route   GET /api/v1/workshops
// @access  Public
exports.getWorkshops = async (req, res, next) => {
	try {
		const workshops = await Workshop.find();
		res
			.status(200)
			.json({ success: true, count: workshops.length, data: workshops });
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// @desc    Get single workshop
// @route   GET /api/v1/workshops/:id
// @access  Public
exports.getWorkshop = async (req, res, next) => {
	try {
		const workshop = await Workshop.findById(req.params.id);
		if (!workshop) {
			return res.status(400).json({ success: false });
		}
		res.status(200).json({ success: true, data: workshop });
	} catch (error) {
		res.status(200).json({ success: false });
	}
};

// @desc    Create new workshop
// @route   POST /api/v1/workshops
// @access  Private
exports.createWorkshop = async (req, res, next) => {
	try {
		const workshop = await Workshop.create(req.body);
		res.status(201).json({ success: true, data: workshop });
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// @desc    Update workshop
// @route   PUT /api/v1/workshops/:id
// @access  Private
exports.updateWorkshop = async (req, res, next) => {
	try {
		const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!workshop) {
			return res.status(400).json({ success: false });
		}
		res.status(200).json({ success: true, data: workshop });
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// @desc    Delete workshop
// @route   DELETE /api/v1/workshops/:id
// @access  Private
exports.deleteWorkshop = async (req, res, next) => {
	try {
		const workshop = await Workshop.findByIdAndDelete(req.params.id);

		if (!workshop) {
			return res.status(400).json({ success: false });
		}
		res.status(200).json({ success: true, data: {} });
	} catch (error) {
		res.status(400).json({ success: false });
	}
};
