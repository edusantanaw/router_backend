import { LoadRouterCustomersUsecase } from "../../../../data/usecases/routers/loadCustomers";
import { RouterRepository } from "../../../../infra/repositories/router.repository";

export function loadRouterCustomersUsecaseFactory() {
  const repository = new RouterRepository();
  return new LoadRouterCustomersUsecase(repository);
}
