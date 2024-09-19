import { CreateController } from "../../../../controllers/createController";
import { createRouterUsecaseFactory } from "../../usecases/routers/create";

export function createRouterControllerFactory() {
  return new CreateController(createRouterUsecaseFactory());
}
