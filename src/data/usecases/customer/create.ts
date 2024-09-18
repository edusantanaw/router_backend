import { ICustomer } from "../../../@types/customer.type";
import { Customer, ICustomerData } from "../../../domain/entities/customer";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExists.exception";
import messages from "./messages.json";

interface ICreateRepository<T> {
  create(data: T): Promise<T>;
}

interface ILoadByCpfCnpj {
  loadByCpfCnpj(cpfCnpj: string): Promise<ICustomer | null>;
}

interface ICustomerRepository
  extends ILoadByCpfCnpj,
    ICreateRepository<ICustomer> {}

export class CreateCustomerUsecase {
  constructor(protected repository: ICustomerRepository) {}

  public async create(data: ICustomerData) {
    const cpfCnpjExists = await this.repository.loadByCpfCnpj(data.cpfCnpj);
    if (cpfCnpjExists)
      throw new AlreadyExistsException(messages.alreadyExistisCpfCnpj);
    const customer = new Customer(data).getCustomer;
    const created = await this.repository.create(customer);
    return created;
  }
}
