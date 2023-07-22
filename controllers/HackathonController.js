import HackathonServices from "../Services/HackathonServices.js";

const hackathonServices=new HackathonServices();
class HackathonController{
    CreateHackathon(req,res){
        return hackathonServices.CreateHackathon(req,res);
    }

    SearchByName(req,res){
        return hackathonServices.SearchbyName(req,res)
    }

    SearchByName(req,res){
        return hackathonServices.SearchbyName(req,res)
    }


    SearchByCompanyName(req,res){
        return hackathonServices.SearchbyCompanyName(req,res)
    }
    SearchByTechStack(req,res){
        return hackathonServices.SearchbyTechStack(req,res)
    }
}

export default HackathonController;