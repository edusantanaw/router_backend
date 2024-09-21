import { UpdateCustomerUsecase } from "../../../../data/usecases/customer/update";
import { CustomerRepository } from "../../../../infra/repositories/customer.repository";
import { customerGatewayFactory } from "../../gateway/customer";

export function updateCustomerUsecaseFactory() {
  const repository = customerGatewayFactory();
  return new UpdateCustomerUsecase(repository);
}
