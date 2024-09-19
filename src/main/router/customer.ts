import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { createCustomerControllerFactory } from "../factories/controller/customer/create";

export default (router: Router) => {
  const base = "/api/customer";
  router.post(base, expressAdapter(createCustomerControllerFactory()));
};
