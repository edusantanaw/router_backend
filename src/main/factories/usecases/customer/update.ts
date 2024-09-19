import { UpdateCustomerUsecase } from "../../../../data/usecases/customer/update";
import { CustomerRepository } from "../../../../infra/repositories/customer.repository";

export function updateCustomerUsecaseFactory() {
  const repository = new CustomerRepository();
  return new UpdateCustomerUsecase(repository);
}
