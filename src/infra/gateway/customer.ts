import { ICustomer } from "../../@types/customer.type";
import { CustomerRepositoryElasticSearch } from "../elasticsearch/customers";
import { CustomerRepository } from "../repositories/customer.repository";

export class CustomerGateway {
  constructor(
    protected customerRepository: CustomerRepository,
    protected customerElasticsearch: CustomerRepositoryElasticSearch
  ) {}

  async create(data: ICustomer) {
    const [customer] = await Promise.all([
      this.customerRepository.create(data),
      this.customerElasticsearch.create(data),
    ]);
    return customer;
  }

  async update(data: ICustomer) {
    const [customer] = await Promise.all([
      this.customerRepository.update(data),
      this.customerElasticsearch.update(data),
    ]);
    return customer;
  }

  loadByCpfCnpj(cpfCnpj: string) {
    return this.customerRepository.loadByCpfCnpj(cpfCnpj);
  }

  loadById(id: string) {
    return this.customerRepository.loadById(id);
  }
}
