import { LoadWithPaginationController } from "../../../../controllers/loadWithPagination";
import { loadCustomerWithElasticSearchFactory } from "../../usecases/customer/loadWithElastic";

export function loadWithElasticSearchControllerFactory() {
  return new LoadWithPaginationController(
    loadCustomerWithElasticSearchFactory()
  );
}
