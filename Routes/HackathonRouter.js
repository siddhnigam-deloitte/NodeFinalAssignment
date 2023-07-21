import express from 'express';
import HackathonController from '../controllers/HackathonController.js';

const HackathonRouter=express.Router();

const hackathonController=new HackathonController();

HackathonRouter.post("/Create",(req,res)=>{
       hackathonController.CreateHackathon(req,res)
})

export default HackathonRouter;
