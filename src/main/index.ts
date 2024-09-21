import cors from "cors";
import express from "express";
import database from "./config/database";
import dotenv from "./config/dotenv";
import router from "./router";

dotenv();

const PORT = Number(process.env.PORT ?? 8080);

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router());

database();

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
