import { RouterRepository } from "../../../../infra/repositories/router.repository";
import { LoadWithPaginationlUsecase } from "./../../../../data/usecases/generic/loadWithPagination";

export function loadRouterWithPaginationUsecaseFactory() {
  const repository = new RouterRepository();
  return new LoadWithPaginationlUsecase(repository);
}
