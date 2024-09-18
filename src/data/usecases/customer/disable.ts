import { ICustomer } from "../../../@types/customer.type";
import { Customer } from "../../../domain/entities/customer";
import { AlreadyDisabledException } from "../../../domain/exceptions/alreadyDisabled.exception";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import { ILoadByIdRepository } from "../../repositories/loadById.repository";
import { IUpdateRepository } from "../../repositories/update.repository";
import messages from "./messages/messages.json";

interface ICustomerRepository
  extends IUpdateRepository<ICustomer>,
    ILoadByIdRepository<ICustomer> {}

export class DisableCustomerUsecase {
  constructor(protected customerRepository: ICustomerRepository) {}
  public async disable(id: string) {
    const customerExists = await this.customerRepository.loadById(id);
    if (!customerExists) throw new NotFoundException(messages.customerNotFound);
    if(!customerExists.active) throw new AlreadyDisabledException(messages.alreadyDisabled)
    const customer = new Customer(customerExists).disable().getCustomer;
    const updatedCustomer = await this.customerRepository.update(customer);
    return updatedCustomer;
  }
}
