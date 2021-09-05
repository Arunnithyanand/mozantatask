
 const task = require('./api/getTasks')
var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
var cors = require('cors')
app.use(cors())
const mongoose = require("mongoose")
mongoose
   
    .connect("mongodb+srv://userone:userone@cluster0.rjssr.mongodb.net/mozanta", { useNewUrlParser: true })

    
    .then(() => {
        app.listen(3002, () => {
            console.log("Server has started!")
        })
    })
app.use('/tasks', require('./api/getTasks'));
app.use('/delete/taskid', require('./api/getTasks'));
app.use('/update/taskid', require('./api/getTasks'));
app.use(task);



