import { CustomerRepositoryElasticSearch } from "../../../infra/elasticsearch/customers";
import { CustomerGateway } from "../../../infra/gateway/customer";
import { CustomerRepository } from "../../../infra/repositories/customer.repository";

export function customerGatewayFactory() {
  const customerRepository = new CustomerRepository();
  const customerElasticsearch = new CustomerRepositoryElasticSearch();
  return new CustomerGateway(customerRepository, customerElasticsearch);
}
