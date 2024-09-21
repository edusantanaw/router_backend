import { LoadWithPaginationlUsecase } from "../../../../data/usecases/generic/loadWithPagination";
import { CustomerRepositoryElasticSearch } from "../../../../infra/elasticsearch/customers";

export function loadCustomerWithElasticSearchFactory(){
    const customerElasticsearch = new CustomerRepositoryElasticSearch();
    return new LoadWithPaginationlUsecase(customerElasticsearch)
}