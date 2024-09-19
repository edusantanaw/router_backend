import express from "express";
import dotenv from "./config/dotenv";
import prisma from "../infra/prisma";
import router from "./router";

dotenv();

const PORT = Number(process.env.PORT ?? 8080);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router());

prisma
  .$connect()
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.log(err);
    throw new Error("db failed");
  });

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
