import { LoadWithPaginationController } from "../../../../controllers/loadWithPagination";
import { loadRouterWithPaginationUsecaseFactory } from "../../usecases/routers/loadWithPagination";

export function loadRouterWithPaginationControllerFactory() {
  return new LoadWithPaginationController(
    loadRouterWithPaginationUsecaseFactory()
  );
}
