import { DisableCustomerUsecase } from "../../../../data/usecases/customer/disable";
import { CustomerRepository } from "../../../../infra/repositories/customer.repository";

export function disableCustomerUsecaseFactory() {
  const repository = new CustomerRepository();
  return new DisableCustomerUsecase(repository);
}
