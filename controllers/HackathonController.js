import HackathonServices from "../Services/HackathonServices.js";

const hackathonServices=new HackathonServices();
class HackathonController{
    CreateHackathon(req,res){
        return hackathonServices.CreateHackathon(req,res);
    }
}

export default HackathonController;