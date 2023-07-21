import { DataTypes } from "sequelize";
import sequelize from "../Db/Db.js";
import Employee from "./Employee.js";
import Hackathon from "./Hackathon.js";

const EmployeeHackathon = sequelize.define('EmployeeHackathon', {
   },
    {
        timestamps:false
    }
  );
  

  export default EmployeeHackathon