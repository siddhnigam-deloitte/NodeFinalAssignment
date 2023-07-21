import { DataTypes } from "sequelize";
import sequelize from "../Db/Db.js";



const Employee = sequelize.define('Employee', {

    EmployeeId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // Model attributes are defined here
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EmailId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ExperienceLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      TechStack: {
        type: DataTypes.STRING,
        allowNull: false
      },
      BuisnessUnit: {
        type: DataTypes.STRING,
        allowNull: false
      }


  }, {
    // Other model options go here
    timestamps: false
  });




  

  console.log(Employee === sequelize.models.Employee);

  export default Employee;