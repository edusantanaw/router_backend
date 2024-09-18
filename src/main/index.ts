import express from "express";
import dotenv from "./config/dotenv";
import prisma from "../infra/prisma";

dotenv();

const PORT = Number(process.env.PORT ?? 8080);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

prisma.$connect()

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
