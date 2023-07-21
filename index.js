import  express  from 'express';
import sequelize from './Db/Db.js';
import Employee from './Models/Employee.js';
import EmployeeRouter from './Routes/EmployeeRouter.js';
import Hackathon from './Models/Hackathon.js';
import EmployeeHackathon from './Models/EmployeeHackathon.js';
import HackathonRouter from './Routes/HackathonRouter.js';



const app=express();

console.log(Employee,Hackathon)

app.use(express.json());

const PORT = 3000;
app.use("/employee", EmployeeRouter);
app.use("/Hackathon",HackathonRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

 


Employee.belongsToMany(Hackathon, { through: EmployeeHackathon });
Hackathon.belongsToMany(Employee, { through: EmployeeHackathon });
 
  await sequelize.sync({ alter: true });
  
console.log("All models were synchronized successfully.");
