import Hackathon from "../Models/Hackathon.js";

class HackathonServices{
    async CreateHackathon(req,res){
        const newHack=req.body;
        const hack=await Hackathon.create(newHack)
        res.status(200).send("Hackathon Created")
    }
}

export default HackathonServices