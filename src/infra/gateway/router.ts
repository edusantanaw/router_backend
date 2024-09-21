import { IRouter } from "../../@types/route.type";
import { RouterRepositoryElasticSearch } from "../elasticsearch/router";
import { RouterRepository } from "../repositories/router.repository";

export class RouterGateway {
  constructor(
    protected routerRepository: RouterRepository,
    protected customerElasticsearch: RouterRepositoryElasticSearch
  ) {}

  async create(data: IRouter) {
    const [customer] = await Promise.all([
      this.routerRepository.create(data),
      this.customerElasticsearch.create(data),
    ]);
    return customer;
  }

  async update(data: IRouter) {
    const [customer] = await Promise.all([
      this.routerRepository.update(data),
      this.customerElasticsearch.update(data),
    ]);
    return customer;
  }

  loadByIp(cpfCnpj: string) {
    return this.routerRepository.loadByIp(cpfCnpj);
  }
}
