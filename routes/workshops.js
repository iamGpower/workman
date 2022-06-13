const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {});

router.get('/:id', (req, res) => {
	res
		.status(200)
		.json({ success: true, msg: `Display workshop ${req.params.id}` });
});

router.post('/', (req, res) => {
	res.status(200).json({ success: true, msg: 'Create new workshop' });
});

router.put('/:id', (req, res) => {
	res
		.status(200)
		.json({ success: true, msg: `Update workshop ${req.params.id}` });
});
router.delete('/:id', (req, res) => {
	res
		.status(200)
		.json({ success: true, msg: `Remove workshop ${req.params.id}` });
});

module.exports = router;
