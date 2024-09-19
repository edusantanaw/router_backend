import { UpdateController } from "../../../../controllers/updateController";
import { updateRouterUsecaseFactory } from "../../usecases/routers/update";

export function updateRouterControllerFactory() {
  return new UpdateController(updateRouterUsecaseFactory());
}
