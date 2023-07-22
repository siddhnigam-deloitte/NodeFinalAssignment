import { where } from "sequelize";
import Employee from "../Models/Employee.js";
import JwtSign from "../Jwt/JwtSign.js";
import sequelize from "../Db/Db.js";
import Hackathon from "../Models/Hackathon.js";
import EmployeeHackathon from "../Models/EmployeeHackathon.js";


class EmployeeServices{
    async register(req,res){
        const newemployee = req.body;
        const emp= await Employee.create(newemployee)
        console.log("emp's auto-generated ID:", emp.id);
        res.status(200).send('Employee Registered')

    }

     async login(req,res){
        const { EmailId, Password } = req.body;
       const emp= await Employee.findOne({ where: { EmailId: EmailId } })
       console.log("vjfjggiggghhh",emp)

       if(emp&&emp.Password==Password)
       {
        const token = JwtSign({ EmailId })
        res.json({ message: "Signed in successfully", token })
       }
       else{
        res.status(403).send("Bad credentials or user not exist")
       }
       
    }

    async listallHackathon(req,res)
    {
        const all=await Hackathon.findAll()
        const today = new Date();
        const array=[];
        all.forEach(x=>{
            if(Date.parse(x.StartDate)>=today&&x.Slots>0)
            {
               let r={...x.dataValues,...{"Status":"Registration Open"}}
               array.push(r)
            }
            else
            {
                let r={...x.dataValues,...{"Status":"Registration Closed"}}
                array.push(r)
            }
        })
        console.log(array)

        res.send(array)
    }

    async enrollhackathon(req,res)
    {
        const id=req.params.id;
        const today=new Date();
        const emp=await Employee.findOne({ where: { EmailId: req.payload.EmailId } })
        const hackathon=await Hackathon.findOne({where:{HackathonId:parseInt(id)}})
        if(hackathon.Slots>0&&Date.parse(hackathon.StartDate)>today&&emp.ExperienceLevel>=hackathon.MinimumReqExp)
        {
            hackathon.addEmployee(emp)
            hackathon.Slots=hackathon.Slots-1;
            hackathon.save()
            res.status(200).send(`${emp.EmailId} enrolled to Hackathon ${hackathon.HackathonId}`)
        }
        else
        {
            res.status(400).send("Cannot Enroll to this Hackathon")
        }

        
    }

    async ListallParticipatedHackathons(req,res)
    {
        const emailid=req.payload.EmailId;
        const emp=await Employee.findOne({where:{EmailId:emailid}})
        const all=await EmployeeHackathon.findAll({where:{EmployeeEmployeeId:emp.EmployeeId}})
        const arr=[];
        for (const x of all) {
            const k = await Hackathon.findOne({ where: { HackathonId: x.dataValues.HackathonHackathonId } });
            arr.push(k);
          }
        console.log(arr)
        res.send(arr)
    }
}
export default EmployeeServices;