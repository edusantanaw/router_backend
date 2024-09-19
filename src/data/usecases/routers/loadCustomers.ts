import { ICustomer } from "../../../@types/customer.type";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { ILoadByIdUsecase } from "../../../domain/usecases/loadById.usecase";
import { ILoadByIpRepository } from "../../repositories/loadByIp.repository";
import messages from "./messages/messages.json";

interface IRouterRepository extends ILoadByIpRepository {
  loadCustomers(ip: string): Promise<ICustomer[]>;
}

export class LoadRouterCustomersUsecase
  implements ILoadByIdUsecase<ICustomer[]>
{
  constructor(protected repository: IRouterRepository) {}
  async load(ip: string) {
    const router = await this.repository.loadByIp(ip);
    if (!router) throw new NotFoundException(messages.routerNotFound);
    const customers = await this.repository.loadCustomers(ip);
    return customers;
  }
}
