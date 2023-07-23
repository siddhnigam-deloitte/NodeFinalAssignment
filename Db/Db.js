import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodeassignment', 'nodeassignment_user', 'CWlmiNIhlMANBkfOruqApVx92WGYPoxo', {
    host: 'dpg-ciuic4liuiedpv092sh0-a',
    dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


export default sequelize;