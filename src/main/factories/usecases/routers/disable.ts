import { DisableRouterUsecase } from "../../../../data/usecases/routers/disable";
import { RouterRepository } from "../../../../infra/repositories/router.repository";

export function disableRouterUsecaseFactory() {
  const repository = new RouterRepository();
  return new DisableRouterUsecase(repository);
}
