const express = require("express");
const router = new express.Router();
const Employee = require("../model/employee");

//configure the route

//Read the data of registered Students
router.get("/employees",async(req,res)=>{
    try{
        const employeesData = await Employee.find();
        res.send(employeesData);
    }
    catch(e){
        res.send(e);
    }

})
//Get the individual Employee data using id

router.get("/employee/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    //console.log(req.params.id);
    const employeeData = await Employee.findById(_id);

    if(!employeeData){
        return res.status(404).send();
    }else{
        res.send(employeeData);
    }
    
}
    catch(e){
        res.status(500).send(e);
    }

})
//Create a new Employee using async/await

router.post("/employee", async(req,res)=>{

    try{
        const user = new Employee(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){res.status(400).send(e);}
})

//Update the employees by it's id

router.patch("/employee/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateEmployees = await Employee.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateEmployees);
    }
    catch(e){res.status(404).send(e);}
})

//Delete the employee by it's id

router.delete("/employee/:id",async(req,res)=>{
    try{
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteEmployee);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;