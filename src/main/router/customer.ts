import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { createCustomerControllerFactory } from "../factories/controller/customer/create";
import { loadCustomerWithPaginationControllerFactory } from "../factories/controller/customer/loadWithPagination";
import { updateCustomerControllerFactory } from "../factories/controller/customer/update";
import { disableCustomerControllerFactory } from "../factories/controller/customer/disable";
import validationMiddleare from "../middlewares/validationMiddleare";
import customer from "../middlewares/validation/customer";
import { loadWithElasticSearchControllerFactory } from "../factories/controller/customer/loadWithElasticsearch";

export default (router: Router) => {
  const base = "/api/customer";
  const customerMiddlewareValidation = validationMiddleare(customer);
  router.post(
    base,
    customerMiddlewareValidation,
    expressAdapter(createCustomerControllerFactory())
  );
  router.get(
    base,
    expressAdapter(loadCustomerWithPaginationControllerFactory())
  );
  router.put(
    `${base}/:id`,
    customerMiddlewareValidation,
    expressAdapter(updateCustomerControllerFactory())
  );
  router.delete(
    `${base}/:id`,
    expressAdapter(disableCustomerControllerFactory())
  );
  router.get(
    `${base}/elastic`,
    expressAdapter(loadWithElasticSearchControllerFactory())
  );
};
