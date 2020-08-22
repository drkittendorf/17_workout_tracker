const router = require('express').Router();
const Workouts = require('../models/workout.js');
const mongoose = require('mongoose');


router.get('/exercise')

router.get("/", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
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











module.exports = router;