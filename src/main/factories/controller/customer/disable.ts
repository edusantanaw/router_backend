import { DisableController } from "../../../../controllers/disableController";
import { disableCustomerUsecaseFactory } from "../../usecases/customer/disable";

export function disableCustomerControllerFactory() {
  return new DisableController(disableCustomerUsecaseFactory());
}
