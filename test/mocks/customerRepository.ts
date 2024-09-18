import { ICustomer } from "@/@types/customer.type";
import { RepositoryInMemory } from "./repository";

export class CustomerRepositoryInMemory extends RepositoryInMemory<ICustomer> {
  public async loadByCpfCnpj(cpfCnpj: string) {
    const item = this.items.find((e) => e.cpfCnpj === cpfCnpj);
    if (!item) return null;
    return item;
  }

  public async loadById(id: string) {
    const customer = this.items.find((e) => e.id === id);
    if (!customer) return null;
    return customer;
  }
}
