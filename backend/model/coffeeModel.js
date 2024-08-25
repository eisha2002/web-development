import {DataTypes, Sequelize} from "sequelize";
import db from "../config/database.js";

const {dataTypes} = Sequelize;

const Coffee = db.define("coffee", {
    icedCoffee: {type: DataTypes.STRING},
    flavor: {type: DataTypes.STRING},
    calories: {type: DataTypes.INTEGER},
    price: {type: DataTypes.FLOAT}
}, {freezeTableName: true});

export default Coffee;
