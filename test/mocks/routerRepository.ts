import { ICustomer } from "./../../src/@types/customer.type";
import { IRouter } from "../../src/@types/route.type";
import { RepositoryInMemory } from "./repository";

export class RouterRepositoryInMemory extends RepositoryInMemory<IRouter> {
  public async loadByIp(ip: string) {
    const router = this.items.find((e) => e.IP === ip);
    if (router) return router;
    return null;
  }

  public customers: ICustomer[] = [];
  public async loadCustomers(ip: string) {
    return this.customers;
  }
}
