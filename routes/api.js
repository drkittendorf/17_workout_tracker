const router = require('express').Router();
const Workouts = require('../models/workout.js');
const mongoose = require('mongoose');


router.get('/exercise')

router.get("/", (req, res) => {
	db.Workout.find({})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.put('/api/workouts/:id', async (req, res) => {
	db.Workout.update(
		{ _id: mongoose.Types.ObjectId(req.params.id) },
		{ $push: { exercises: req.body } },
		{ new: true }
	)
		.then((data) => res.json(data))
		.catch((err) => res.json(err));
});

router.post('/api/workouts', (res) => {
db.Workouts.create({})
.then(dbResponse => {
    res.json(dbResponse)
})
 .catch(err => {
     res.statusCode(400).json(err);
 });
});

router.get('/api/workout',  (req, res) => {
  Workouts.find({})
  .then(dbResponse => {
      res.json(dbResponse);
  })
  .catch(err => {
    res.statusCode(400).json(err);
});
});

router.get('/api/workouts/range', async (req, res) => {
	try {
		let data = await db.Workout.find({}).sort({ day: -1 }).limit(7);
		res.json(data);
	} catch (error) {
		res.json(error);
	}
});




module.exports = router;