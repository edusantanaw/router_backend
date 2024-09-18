import { ICustomer } from "@/@types/customer.type";
import { ILoadByIdRepository } from "@/data/repositories/loadById.repository";
import { IUpdateRepository } from "@/data/repositories/update.repository";
import { NotFoundException } from "@/domain/exceptions/notFoundException";
import messages from "@/data/usecases/customer/utils/messages.json";
import { Customer } from "@/domain/entities/customer";

interface ICustomerRepository
  extends IUpdateRepository<ICustomer>,
    ILoadByIdRepository<ICustomer> {}

export class DisableCustomerUsecase {
  constructor(protected customerRepository: ICustomerRepository) {}
  public async disable(id: string) {
    const customerExists = await this.customerRepository.loadById(id);
    if (!customerExists) throw new NotFoundException(messages.customerNotFound);
    const customer = new Customer(customerExists).disable().getCustomer;
    const updatedCustomer = await this.customerRepository.update(customer);
    return updatedCustomer;
  }
}
