import express from 'express';
import HackathonController from '../controllers/HackathonController.js';
import verifyAuthentication from '../Jwt/verifyAuthentication.js';

const HackathonRouter=express.Router();

const hackathonController=new HackathonController();

HackathonRouter.post("/Create",(req,res)=>{
       hackathonController.CreateHackathon(req,res)
})
HackathonRouter.get("/SearchbyName",verifyAuthentication,(req,res)=>{
       hackathonController.SearchByName(req,res);
})
HackathonRouter.get("/SearchbyCompanyName",verifyAuthentication,(req,res)=>{
    hackathonController.SearchByCompanyName(req,res);
})
HackathonRouter.get("/SearchbyTechStack",verifyAuthentication,(req,res)=>{
    hackathonController.SearchByTechStack(req,res);
})
HackathonRouter.get("/ListallParticipants/:id",(req,res)=>{
    hackathonController.listAllParticipants(req,res);
})
HackathonRouter.delete("/delete/:id",(req,res)=>{
    hackathonController.DeleteHackathon(req,res);
})
HackathonRouter.put("/update/:id",(req,res)=>{
    hackathonController.UpdateHackathon(req,res)
})

export default HackathonRouter;
