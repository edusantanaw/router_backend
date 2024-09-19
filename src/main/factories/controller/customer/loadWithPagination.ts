import { LoadWithPaginationController } from "../../../../controllers/loadWithPagination";
import { loadCustomerWithPaginationUsecaseFactory } from "../../usecases/customer/loadWithPagination";

export function loadCustomerWithPaginationControllerFactory() {
  return new LoadWithPaginationController(
    loadCustomerWithPaginationUsecaseFactory()
  );
}
