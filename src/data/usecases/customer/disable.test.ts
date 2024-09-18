import { ICustomer } from "@/@types/customer.type";
import messages from "@/data/usecases/customer/messages/messages.json";
import { AlreadyDisabledException } from "@/domain/exceptions/alreadyDisabled.exception";
import { NotFoundException } from "@/domain/exceptions/notFoundException";
import { CustomerRepositoryInMemory } from "@/test/mocks/customerRepository";
import { makeAValidCustomer } from "@/test/utils/createCustomer";
import { randomUUID } from "node:crypto";
import { DisableCustomerUsecase } from "./disable";

describe("DisableCustomerUsecase", () => {
  test("Should throw if customer not exists", () => {
    const repository = new CustomerRepositoryInMemory();
    const disableCustomerUsecase = new DisableCustomerUsecase(repository);
    const response = disableCustomerUsecase.disable(randomUUID());
    expect(response).rejects.toEqual(
      new NotFoundException(messages.customerNotFound)
    );
  });

  test("Should throw if customer already disabled ", async () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer() as ICustomer;
    customer.active = false;
    repository.items.push(customer);
    const disableCustomerUsecase = new DisableCustomerUsecase(repository);
    const response = disableCustomerUsecase.disable(customer.id);
    expect(response).rejects.toEqual(
      new AlreadyDisabledException(messages.alreadyDisabled)
    );
  });

  test("Should disable customer successfully", async () => {
    const repository = new CustomerRepositoryInMemory();
    const customer = makeAValidCustomer() as ICustomer;
    repository.items.push(customer);
    const disableCustomerUsecase = new DisableCustomerUsecase(repository);
    const response = await disableCustomerUsecase.disable(customer.id);
    expect(response.active).toBe(false);
  });
});
