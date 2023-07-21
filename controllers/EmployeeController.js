import EmployeeServices from "../Services/EmployeeServices.js"

const employeeServices = new EmployeeServices()
class EmployeeController{
    register(req,res){
       return employeeServices.register(req,res)
    }

    login(req,res){
        return employeeServices.login(req,res)
    }
    listallhackathon(req,res)
    {
        return employeeServices.listallHackathon(req,res)
    }
    enrollhackathon(req,res)
    {
      return employeeServices.enrollhachathon(req,res)
    }
}
 export default EmployeeController