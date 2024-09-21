import prisma from "../../infra/prisma";

export default () => {
  prisma.$connect().then(() => console.log("Database connected"));
};
