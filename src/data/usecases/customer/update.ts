import { ICustomer } from "../../../@types/customer.type";
import { Customer } from "../../../domain/entities/customer";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { ILoadByIdRepository } from "../../repositories/loadById.repository";
import { IUpdateRepository } from "../../repositories/update.repository";
import messages from "./messages/messages.json";

interface ICustomerRepository
  extends IUpdateRepository<ICustomer>,
    ILoadByIdRepository<ICustomer> {}

export class UpdateCustomerUsecase {
  constructor(protected repository: ICustomerRepository) {}

  public async update(data: ICustomer) {
    const customerExists = await this.repository.loadById(data.id);
    if (!customerExists) throw new NotFoundException(messages.customerNotFound);
    const customer = new Customer({
      ...customerExists,
      ...data,
      active: true,
    }).getCustomer;
    const updatedCustomer = await this.repository.update(customer);
    return updatedCustomer;
  }
}
