import { makeAValidCustomer } from "../../../../test/utils/createCustomer";
import { ICustomer } from "../../../@types/customer.type";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExists.exception";
import { CreateCustomerUsecase } from "./create";
import messages from "./messages.json";

export class RepositoryInMemory<T> {
  public items: T[] = [];

  public createInput: T | null = null;
  public async create(data: T) {
    this.createInput = data;
    return data;
  }
}

class CustomerRepositoryInMemory extends RepositoryInMemory<ICustomer> {
  public async loadByCpfCnpj(cpfCnpj: string) {
    const item = this.items.find((e) => e.cpfCnpj === cpfCnpj);
    if (!item) return null;
    return item;
  }
}

describe("CreateCustomerUsecase", () => {
  test("Should throw if cpf or cnpj is already in use", () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer();
    repository.items.push(customer);
    const createUsecase = new CreateCustomerUsecase(repository);
    const response = createUsecase.create(customer);
    expect(response).rejects.toThrow(
      new AlreadyExistsException(messages.alreadyExistisCpfCnpj)
    );
  });

  test("Should create an customer succefully", async () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer();
    const createUsecase = new CreateCustomerUsecase(repository);
    const response = await createUsecase.create(customer);
    expect(response).toEqual(customer);
  });
});
