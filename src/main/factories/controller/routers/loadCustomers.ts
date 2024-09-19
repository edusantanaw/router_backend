import { LoadByIdController } from "../../../../controllers/loadByIdController";
import { loadRouterCustomersUsecaseFactory } from "../../usecases/routers/loadCustomers";

export function loadRouterCustomerControllerFactory() {
  return new LoadByIdController(loadRouterCustomersUsecaseFactory());
}
