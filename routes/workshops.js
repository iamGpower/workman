const express = require('express');
const {
	getWorkshops,
	getWorkshop,
	createWorkshop,
	updateWorkshop,
	deleteWorkshop,
} = require('../controllers/workshops');
const router = express.Router();

router.route('/').get(getWorkshops).post(createWorkshop);

router
	.route('/:id')
	.get(getWorkshop)
	.put(updateWorkshop)
	.delete(deleteWorkshop);

module.exports = router;
