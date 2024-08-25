import express from "express";
import db from "./config/database.js";
import coffeeRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log("database connected...");
} catch (error) {
    console.error("connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/coffee', coffeeRoutes);

app.listen(5000, () => console.log(" http://localhost:5000/coffee"));