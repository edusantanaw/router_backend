import { RouterRepositoryElasticSearch } from "../../../infra/elasticsearch/router";
import { RouterGateway } from "../../../infra/gateway/router";
import { RouterRepository } from "../../../infra/repositories/router.repository";

export function routerGatewayFactory() {
  const routerRepository = new RouterRepository();
  const routerElastic = new RouterRepositoryElasticSearch();
  return new RouterGateway(routerRepository, routerElastic);
}
