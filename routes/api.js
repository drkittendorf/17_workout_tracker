const router = require('express').Router();
const Workout = require('../models/Workout');
const mongoose = require('mongoose')

router.get('/api/workouts', (req, res) => {
	Workout.find({})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.put('/api/workouts/:id', async (req, res) => {
	Workout.update(
		{ _id: mongoose.Types.ObjectId(req.params.id) },
		{ $push: { exercises: req.body } },
		{ new: true }
	)
		.then((data) => res.json(data))
		.catch((err) => res.json(err));
});

router.post('/api/workouts', (res) => {
 Workout.create({})
.then(dbResponse => {
    res.json(dbResponse)
})
 .catch(err => {
     res.statusCode(400).json(err);
 });
});

router.get('/api/workout',  (req, res) => {
  Workout.find({})
  .then(dbResponse => {
      res.json(dbResponse);
  })
  .catch(err => {
    res.statusCode(400).json(err);
});
});

router.get('/api/workouts/range', async (req, res) => {
	try {
		let data = await Workout.find({}).sort({ day: -1 }).limit(7);
		res.json(data);
	} catch (error) {
		res.json(error);
	}
});


module.exports = router;