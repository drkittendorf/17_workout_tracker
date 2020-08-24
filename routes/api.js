const router = require('express').Router();
const Workouts = require('../models/Workouts');
const mongoose = require('mongoose');

//Works
router.get('/api/workouts', (req, res) => {
	Workouts.find({})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.put('/api/workouts/:id', async (req, res) => {
	Workouts.update(
		{ _id: mongoose.Types.ObjectId(req.params.id) },
		{ $push: { exercises: req.body } },
		{ new: true }
	)
		.then((data) => res.json(data))
		.catch((err) => res.json(err));
});

// Create workouts
router.post('/api/workouts', async ({ body }, res) => {
 try {
     let data = await Workouts.create(body);
     res.json(data);
 } catch ({ message }) {
    res.json(message);
 }
});

router.get('/api/workouts/range', async (req, res) => {
	try {
		let data = await Workouts.find({}).sort({ day: -1 }).limit(7);
		res.json(data);
	} catch (error) {
		res.json(error);
	}
});


module.exports = router