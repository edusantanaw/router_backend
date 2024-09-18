import { ICustomer } from "@/@types/customer.type";
import { Customer } from "@/domain/entities/customer";
import { NotFoundException } from "@/domain/exceptions/notFoundException";
import messages from "@/data/usecases/customer/utils/messages.json";

interface IUpdateRepository<T> {
  update(data: T): Promise<T>;
}

interface ICustomerRepository extends IUpdateRepository<ICustomer> {
  loadById(id: string): Promise<ICustomer | null>;
}

export class UpdateCustomerUsecase {
  constructor(protected repository: ICustomerRepository) {}

  public async update(data: ICustomer) {
    const customerExists = await this.repository.loadById(data.id);
    if (!customerExists) throw new NotFoundException(messages.customerNotFound);
    const customer = new Customer({
      ...customerExists,
      ...data,
    });
    const updatedCustomer = await this.repository.update(customer.getCustomer);
    return updatedCustomer;
  }
}
