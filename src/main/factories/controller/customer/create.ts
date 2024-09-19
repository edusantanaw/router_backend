import { CreateController } from "../../../../controllers/createController";
import { createCustomerUsecaseFactory } from "../../usecases/customer/create";

export function createCustomerControllerFactory() {
  return new CreateController(createCustomerUsecaseFactory());
}
