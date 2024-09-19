import { CreateCustomerUsecase } from "../../../../data/usecases/customer/create";
import { CustomerRepository } from "../../../../infra/repositories/customer.repository";

export function createCustomerUsecaseFactory() {
  const repository = new CustomerRepository();
  return new CreateCustomerUsecase(repository);
}
