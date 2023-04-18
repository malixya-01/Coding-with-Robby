//load env variables
if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}


//Import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');
const classesController = require("./controllers/classesController");


//Create an express app
const app = express();

//Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));


//Connect to database
connectToDb();

//Routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/checkAuth', requireAuth, usersController.checkAuth);

app.post("/notes", requireAuth, notesController.createNote);
app.get("/notes", requireAuth, notesController.fetchNotes);
app.get("/notes/:id", requireAuth, notesController.fetchNote);
app.put('/notes/:id', requireAuth, notesController.updateNote);
app.delete("/notes/:id", requireAuth, notesController.deleteNote);

app.post("/newClass", classesController.createClass);
app.get("/getClasses", classesController.fetchClasses);


//Start our server
app.listen(process.env.PORT);