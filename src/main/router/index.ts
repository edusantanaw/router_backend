import { Router } from "express";
import customer from "./customer";

export default () => {
  const router = Router();
  customer(router);
  return router;
};
