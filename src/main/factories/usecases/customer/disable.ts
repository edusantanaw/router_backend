import { DisableCustomerUsecase } from "../../../../data/usecases/customer/disable";
import { customerGatewayFactory } from "../../gateway/customer";

export function disableCustomerUsecaseFactory() {
  const repository =customerGatewayFactory();
  return new DisableCustomerUsecase(repository);
}
