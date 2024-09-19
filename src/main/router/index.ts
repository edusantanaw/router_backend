import { Router } from "express";
import customer from "./customer";
import routerEndPoints from "./router";

export default () => {
  const router = Router();
  customer(router);
  routerEndPoints(router);
  return router;
};
