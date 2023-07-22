import express from 'express'
import EmployeeController from '../controllers/EmployeeController.js';
import verifyAuthentication from '../Jwt/verifyAuthentication.js';
import Hackathon from '../Models/Hackathon.js';

const EmployeeRouter=express.Router();
const employeecontroller =new EmployeeController();
EmployeeRouter.post("/Register",(req,res)=>{
    employeecontroller.register(req,res)

})

EmployeeRouter.post("/Login",(req,res)=>{
    employeecontroller.login(req,res)

})

EmployeeRouter.get("/view",verifyAuthentication,(req,res)=>{
    employeecontroller.listallhackathon(req,res)
})

EmployeeRouter.put("/enroll/:id",verifyAuthentication,(req,res)=>{
    employeecontroller.enrollhackathon(req,res)
})

EmployeeRouter.get("/ListAllHackathon",verifyAuthentication,(req,res)=>{
    employeecontroller.listallParticipatedHackathon(req,res)
})


export default EmployeeRouter;