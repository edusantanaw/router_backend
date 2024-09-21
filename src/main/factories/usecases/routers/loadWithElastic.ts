import { LoadWithPaginationlUsecase } from "../../../../data/usecases/generic/loadWithPagination";
import { RouterRepositoryElasticSearch } from "../../../../infra/elasticsearch/router";

export function loadRouterWithElasticFactory() {
  const routerElastic = new RouterRepositoryElasticSearch();
  return new LoadWithPaginationlUsecase(routerElastic);
}
