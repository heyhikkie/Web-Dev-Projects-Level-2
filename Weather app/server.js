// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


//Routes
app.post('/post-weather-data', (req, res)=>{
    projectData['data'] = req.body;
    res.status(200);
    console.log(projectData);
})

app.get('/all', (req, res)=>{
    res.json(projectData);
})

// Setup Server
const PORT = 8080;
app.listen(PORT, listening);
function listening(){
    console.log(`Listening on port: ${PORT}`);
}