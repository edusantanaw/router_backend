import { UpdateRouterUsecase } from "../../../../data/usecases/routers/update";
import { RouterRepository } from "../../../../infra/repositories/router.repository";
import { routerGatewayFactory } from "../../gateway/router";

export function updateRouterUsecaseFactory() {
  const repository = routerGatewayFactory();
  return new UpdateRouterUsecase(repository);
}
