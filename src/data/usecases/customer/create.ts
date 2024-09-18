import { ICreateCustomerData, ICustomer } from "../../../@types/customer.type";
import { Customer } from "../../../domain/entities/customer";
import { AlreadyExistsException } from "../../../domain/exceptions/alreadyExists.exception";
import messages from "./messages/messages.json";

interface ICreateRepository<T> {
  create(data: T): Promise<T>;
}

interface ILoadByCpfCnpjRepository {
  loadByCpfCnpj(cpfCnpj: string): Promise<ICustomer | null>;
}

interface ICustomerRepository
  extends ILoadByCpfCnpjRepository,
    ICreateRepository<ICustomer> {}

export class CreateCustomerUsecase {
  constructor(protected repository: ICustomerRepository) {}

  public async create(data: ICreateCustomerData) {
    const cpfCnpjExists = await this.repository.loadByCpfCnpj(data.cpfCnpj);
    if (cpfCnpjExists)
      throw new AlreadyExistsException(messages.alreadyExistisCpfCnpj);
    const customer = new Customer(data).getCustomer;
    const created = await this.repository.create(customer);
    return created;
  }
}
