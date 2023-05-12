//load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}


//Import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');
const classesController = require("./controllers/classesController");
const slipPaymentsController = require("./controllers/slipPaymentsController");
const enrollmentsController= require("./controllers/enrollmentsController");
const storeController = require("./controllers/storeController");



//Create an express app
const app = express();

//Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



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

app.post("/uploadSlip", requireAuth, slipPaymentsController.createSlipPayment);
app.get("/allSlips", slipPaymentsController.fetchAll);
app.get("/mySlips/:id", requireAuth, slipPaymentsController.fetchUserSlips);
app.put('/updateSlip/:id', requireAuth, slipPaymentsController.updatePayment);
app.delete("/deleteSlip/:id", requireAuth, slipPaymentsController.deleteSlip);

app.post("/enrollStudent", requireAuth, enrollmentsController.addEnrollment);
app.get("/getStudents/:id", enrollmentsController.fetchStudents);
app.delete("/deleteStudents/:id", requireAuth, enrollmentsController.deleteEnrollment);

//Nadula
const adminRouter = require("./controllers/admins.js");
app.use("/admin", adminRouter);

//Start our server
app.listen(process.env.PORT);

//viganga
// const postRouter = require("./controllers/storeController");
// app.use("/store", postRouter);

app.post("/additem", storeController.addItem);
app.get("/getitems", storeController.getItems);
app.put("/updateitem/:id", storeController.updateItem);
app.delete("/deleteitem/:id", storeController.deleteItem);
app.get("/getStoreItem", storeController.getStoreItem);

//Sachini
const notifyRouter = require("./controllers/notificationControler")
app.use("/notify", notifyRouter)


