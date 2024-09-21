import { LoadWithPaginationController } from "../../../../controllers/loadWithPagination";
import { loadRouterWithElasticFactory } from "../../usecases/routers/loadWithElastic";

export function loadRouterWithElasticControllerFactory() {
  return new LoadWithPaginationController(loadRouterWithElasticFactory());
}
