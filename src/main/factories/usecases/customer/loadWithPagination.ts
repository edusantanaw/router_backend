import { LoadWithPaginationlUsecase } from "../../../../data/usecases/generic/loadWithPagination";
import { CustomerRepository } from "../../../../infra/repositories/customer.repository";

export function loadCustomerWithPaginationUsecaseFactory(){
    const repository = new CustomerRepository()
    return new LoadWithPaginationlUsecase(repository)
}