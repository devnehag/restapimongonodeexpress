const express = require('express'); //import express
require("./db/conn");
const Employee = require("./model/employee");
const employeeRouter = require('./routers/employees');

const app = express(); //setup express app
const port = process.env.PORT||3000; //Setup dynamic port

app.use(express.json());
app.use(employeeRouter); //We need to register our router

//setup the port number to start the server
app.listen(port,()=>{
    console.log(`Server Connection is setup at port ${port}`)});














//You do not need express.json() and express.urlencoded() for
// GET/DELETE requests. We only need it for post/put

//express.json() is a method inbuilt in express to recognize the incoming 
//request object as a json object.This method is called as a middleware in
//your application using the code:app.use(express.json());