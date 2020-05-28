const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Imported files
const scoreRoutes = require('./routes/score');

const app = express();
const port = process.env.PORT || 3030;

//DB connection
mongoose.connect('mongodb://localhost:27017/fiboApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB connected');
});

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api', scoreRoutes);


//Starting a server
app.listen(port, () => {
    console.log('connected and running');
})