import Hackathon from "../Models/Hackathon.js";

class HackathonServices{
    async CreateHackathon(req,res){
        const newHack=req.body;
        const hack=await Hackathon.create(newHack)
        res.status(200).send("Hackathon Created")
    }

    async SearchbyName(req,res){
        const name=req.query.Name;
        const final=await Hackathon.findAll()
        
        const ans=final.filter(x=>  {return x.dataValues.HackathonName.toUpperCase()==name.toUpperCase()})
        console.log(ans)
        res.status(200).send(ans)
    }
    async SearchbyCompanyName(req,res){
        const name=req.query.CompanyName;
        const final=await Hackathon.findAll()
       
        const ans=final.filter(x=>  {return x.dataValues.CompanyName.toUpperCase()==name.toUpperCase()})
        console.log(ans)
        res.status(200).send(ans)
    }
    async SearchbyTechStack(req,res){
        const name=req.query.TechStack;
        const final=await Hackathon.findAll()
        final.forEach(x=>console.log(x.dataValues.TechStack.toUpperCase(),name.toUpperCase()))
    
        const ans=final.filter(x=>  {return x.dataValues.TechStack.toUpperCase()==name.toUpperCase()})
        console.log(ans)
        res.status(200).send(ans)
    }
}


export default HackathonServices