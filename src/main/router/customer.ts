import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { createCustomerControllerFactory } from "../factories/controller/customer/create";
import { loadCustomerWithPaginationControllerFactory } from "../factories/controller/customer/loadWithPagination";

export default (router: Router) => {
  const base = "/api/customer";
  router.post(base, expressAdapter(createCustomerControllerFactory()));
  router.get(
    base,
    expressAdapter(loadCustomerWithPaginationControllerFactory())
  );
};
