import { CreateController } from "../../../../controllers/CreateController";
import { createCustomerUsecaseFactory } from "../../usecases/customer/create";

export function createCustomerControllerFactory() {
  return new CreateController(createCustomerUsecaseFactory());
}
