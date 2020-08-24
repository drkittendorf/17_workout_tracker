const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: 'Enter a type of exercise'
        },

    name: {
        type: String,
        trim: true,
        required: true
        },

    duration: {
        type: Number
        },

    weight: {
        type: Number
        },

    reps: {
        type: Number
        },

    sets: {
        type: Number
        },

    distance: {
        type: Number
        }
     
});

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
 exercises: [ExerciseSchema],

});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;