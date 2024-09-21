import { DisableRouterUsecase } from "../../../../data/usecases/routers/disable";
import { routerGatewayFactory } from "../../gateway/router";

export function disableRouterUsecaseFactory() {
  const repository = routerGatewayFactory();
  return new DisableRouterUsecase(repository);
}
