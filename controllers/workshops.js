const Workshop = require('../models/Workshop');
// @desc    Get all workshops
// @route   GET /api/v1/workshops
// @access  Public
exports.getWorkshops = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Display all workshops`, greet: req.greet });
};

// @desc    Get single workshop
// @route   GET /api/v1/workshops/:id
// @access  Public
exports.getWorkshop = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Display workshop ${req.params.id}` });
};

// @desc    Create new workshop
// @route   POST /api/v1/workshops
// @access  Private
exports.createWorkshop = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Create new workshop' });
};

// @desc    Update workshop
// @route   PUT /api/v1/workshops/:id
// @access  Private
exports.updateWorkshop = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Update workshop ${req.params.id}` });
};

// @desc    Delete workshop
// @route   DELETE /api/v1/workshops/:id
// @access  Private
exports.deleteWorkshop = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Remove workshop ${req.params.id}` });
};
