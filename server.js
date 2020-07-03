const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require('path');
require("dotenv").config();

// Express App/Server
const app = express()

// Port
const port = process.env.PORT || 5000;

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// Mongoose to MongoDB
const uri = process.env.MONGODB_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database")
});

// Routes
const exercisesRoutes = require("./routes/exercise")
const usersRoutes = require("./routes/user")

app.use("/exercises", exercisesRoutes)
app.use("/users", usersRoutes)

// For deployment
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Server port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

