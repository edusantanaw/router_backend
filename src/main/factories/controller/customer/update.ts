import { UpdateController } from "../../../../controllers/updateController";
import { updateCustomerUsecaseFactory } from "../../usecases/customer/update";

export function updateCustomerControllerFactory() {
  return new UpdateController(updateCustomerUsecaseFactory());
}
