import { where } from "sequelize";
import Hackathon from "../Models/Hackathon.js";
import EmployeeHackathon from "../Models/EmployeeHackathon.js";
import Employee from "../Models/Employee.js";

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

    async ListallParticipants(req,res)
    {
        const id=req.params.id;
        const hackathon=await Hackathon.findOne({where:{HackathonId:id}})
        const all=await EmployeeHackathon.findAll({where:{HackathonHackathonId:id}})
        const arr=[];
        for (const x of all) {
            const k = await Employee.findOne({ where: { EmployeeId: x.dataValues.EmployeeEmployeeId } });
            arr.push(k);
          }
        console.log(arr)
        res.send(arr)
    }

    async DeleteHackathon(req,res)
    {
        const id=req.params.id;
        await EmployeeHackathon.destroy({where:{HackathonHackathonId:id}})
        await Hackathon.destroy({where:{HackathonId:id}})
        res.send("Hackathon Cancelled")
    }

    async updateHackathon(req,res)
    {
        const id=req.params.id;
        const body=req.body;
        const today=new Date();
        const hackathon=await Hackathon.findOne({where:{HackathonId:id}})
        if(Date.parse(hackathon.StartDate)>today)
        {
            hackathon.dataValues={...hackathon.dataValues,...body}
            console.log(hackathon)
            await hackathon.save();
            res.send("Updated")
        }
        else
        {
            res.send("Cannot Update Now, Registration has Started")
        }
    }
}


export default HackathonServices