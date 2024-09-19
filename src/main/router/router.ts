import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { createRouterControllerFactory } from "../factories/controller/routers/create";
import { loadRouterWithPaginationControllerFactory } from "../factories/controller/routers/loadWithPagination";
import { updateRouterControllerFactory } from "../factories/controller/routers/update";
import { disableRouterControllerFactory } from "../factories/controller/routers/disable";
import { loadRouterCustomerControllerFactory } from "../factories/controller/routers/loadCustomers";

export default (router: Router) => {
  const base = "/api/router";
  router.post(base, expressAdapter(createRouterControllerFactory()));
  router.get(base, expressAdapter(loadRouterWithPaginationControllerFactory()));
  router.get(
    `${base}/:id/customers`,
    expressAdapter(loadRouterCustomerControllerFactory())
  );
  router.put(`${base}/:id`, expressAdapter(updateRouterControllerFactory()));
  router.delete(
    `${base}/:id`,
    expressAdapter(disableRouterControllerFactory())
  );
};
