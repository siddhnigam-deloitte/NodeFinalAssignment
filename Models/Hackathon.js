import { DataTypes } from "sequelize";
import sequelize from "../Db/Db.js";
import Employee from "./Employee.js";



const Hackathon = sequelize.define('Hackathon', {

    HackathonId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // Model attributes are defined here
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    HackathonName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    StartDate: {
        type: DataTypes.STRING,
        allowNull: true
      },
      EndDate: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Slots: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      StartTime: {
        type: DataTypes.STRING,
        allowNull: true
      },
      EndTime: {
        type: DataTypes.STRING,
        allowNull: true
      },
      MinimumReqExp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      TechStack: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    // Other model options go here
    timestamps: false
  });

  


//   console.log(Employee === sequelize.models.Employee);

  export default Hackathon;