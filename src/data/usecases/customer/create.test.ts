import { CustomerRepositoryInMemory } from "@/test/mocks/customerRepository";
import { makeAValidCustomer } from "@/test/utils/createCustomer";
import { CreateCustomerUsecase } from "./create";
import { AlreadyExistsException } from "@/domain/exceptions/alreadyExists.exception";
import { ICustomer } from "@/@types/customer.type";
import messages from "@/data/usecases/customer/utils/messages.json";

describe("CreateCustomerUsecase", () => {
  test("Should throw if cpf or cnpj is already in use", () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer() as ICustomer;
    repository.items.push(customer);
    const createUsecase = new CreateCustomerUsecase(repository);
    const response = createUsecase.create(customer);
    expect(response).rejects.toThrow(
      new AlreadyExistsException(messages.alreadyExistisCpfCnpj)
    );
  });

  test("Should create a customer successfully", async () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer();
    const createUsecase = new CreateCustomerUsecase(repository);
    const response = await createUsecase.create(customer);
    expect(response).toEqual(customer);
  });
});
