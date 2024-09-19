import { UpdateRouterUsecase } from "../../../../data/usecases/routers/update";
import { RouterRepository } from "../../../../infra/repositories/router.repository";

export function updateRouterUsecaseFactory() {
  const repository = new RouterRepository();
  return new UpdateRouterUsecase(repository);
}
