import { DisableController } from "../../../../controllers/disableController";
import { disableRouterUsecaseFactory } from "../../usecases/routers/disable";

export function disableRouterControllerFactory() {
  return new DisableController(disableRouterUsecaseFactory());
}
