import {Sequelize} from "sequelize";

const db = new Sequelize("khan-db", "root", "",{
    host: "localhost",
    dialect: "mysql",
    define: {timestamps: false}
});

export default db;
