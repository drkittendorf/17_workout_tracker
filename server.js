const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
 },
    (error) => {
        if (!error) {
            console.log('Connected to the database');
        } else {
            console.log('Not successfully connected');
        }
});

// routes
// app.use(routes);
app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
