const express = require('express');
const mongoose = require('mongoose');
const db = require ('./models');
const path = require ('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true
 },
    (error) => {
        if (!error) {
            console.log('Connected to the database');
        } else {
            console.log('Not successfully connected');
        }
}
);

// routes
// app.use(routes);
app.use(require('./routes/api.js'));
app.use(require('./routes/html-routes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
