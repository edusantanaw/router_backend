import { CreateCustomerUsecase } from "../../../../data/usecases/customer/create";
import { CustomerRepository } from "../../../../infra/repositories/customer.repository";
import { customerGatewayFactory } from "../../gateway/customer";

export function createCustomerUsecaseFactory() {
  const repository = customerGatewayFactory();
  return new CreateCustomerUsecase(repository);
}
