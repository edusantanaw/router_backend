import { CustomerRepositoryInMemory } from "../../../../test/mocks/customerRepository";
import { makeAValidCustomer } from "../../../../test/utils/createCustomer";
import { ICustomer } from "../../../@types/customer.type";
import { NotFoundException } from "../../../domain/exceptions/notFoundException";
import messages from "./messages/messages.json";
import { UpdateCustomerUsecase } from "./update";

describe("UpdateCustomerUsecase", () => {
  test("Should throw if customer not exists", () => {
    const repository = new CustomerRepositoryInMemory();
    const updateCustomerUsecase = new UpdateCustomerUsecase(repository);
    const response = updateCustomerUsecase.update(
      makeAValidCustomer() as ICustomer
    );
    expect(response).rejects.toEqual(
      new NotFoundException(messages.customerNotFound)
    );
  });

  test("Should not allow disabling the customer", async () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer() as ICustomer;
    repository.items.push(customer);
    const updateCustomerUsecase = new UpdateCustomerUsecase(repository);
    const response = await updateCustomerUsecase.update({
      ...customer,
      active: false,
    });
    expect(response.active).toBe(true);
  });

  test("Should update customer successfully", async () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer() as ICustomer;
    repository.items.push(customer);
    const updateCustomerUsecase = new UpdateCustomerUsecase(repository);
    const response = await updateCustomerUsecase.update(customer);
    expect(response).toEqual(customer);
  });
});
