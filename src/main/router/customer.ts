import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { createCustomerControllerFactory } from "../factories/controller/customer/create";
import { loadCustomerWithPaginationControllerFactory } from "../factories/controller/customer/loadWithPagination";
import { updateCustomerControllerFactory } from "../factories/controller/customer/update";
import { disableCustomerControllerFactory } from "../factories/controller/customer/disable";

export default (router: Router) => {
  const base = "/api/customer";
  router.post(base, expressAdapter(createCustomerControllerFactory()));
  router.get(
    base,
    expressAdapter(loadCustomerWithPaginationControllerFactory())
  );
  router.put(`${base}/:id`, expressAdapter(updateCustomerControllerFactory()));
  router.delete(
    `${base}/:id`,
    expressAdapter(disableCustomerControllerFactory())
  );
};
