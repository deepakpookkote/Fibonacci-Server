const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Imported files
const scoreRoutes = require('./routes/score');

const app = express();
const port = process.env.PORT || 3030;
const MONGODB_URI = 'mongodb+srv://notesAdmin:kdPUTtfkY4VWqRlv@cluster0-jzxcu.mongodb.net/fiboApp?retryWrites=true&w=majority';



//DB connection
mongoose.connect(MONGODB_URI,{
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