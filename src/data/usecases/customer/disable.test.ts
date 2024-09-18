import { ICustomer } from "@/@types/customer.type";
import { NotFoundException } from "@/domain/exceptions/notFoundException";
import { CustomerRepositoryInMemory } from "@/test/mocks/customerRepository";
import { makeAValidCustomer } from "@/test/utils/createCustomer";
import { UpdateCustomerUsecase } from "./update";
import messages from "@/data/usecases/customer/utils/messages.json";
import { DisableCustomerUsecase } from "./disable";
import { randomUUID } from "node:crypto";

describe("DisableCustomerUsecase", () => {
  test("Should throw if customer not exists", () => {
    const repository = new CustomerRepositoryInMemory();
    const disableCustomerUsecase = new DisableCustomerUsecase(repository);
    const response = disableCustomerUsecase.disable(randomUUID());
    expect(response).rejects.toEqual(
      new NotFoundException(messages.customerNotFound)
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
