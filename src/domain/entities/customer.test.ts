import { Customer } from "./customer";
import { PersonType } from "../enums/personType.enum";
import { InvalidEntityException } from "../exceptions/invalidEntityException";
import messages from "./messages/messages.json";
import { makeAValidCustomer } from "../../../test/utils/createCustomer";

describe("Customer", () => {
  test("Should generate a random uuid if id is not provided", () => {
    const data = makeAValidCustomer();
    delete data.id;
    const customer = new Customer(data).getCustomer;
    expect(customer.id).not.toBe(undefined);
  });

  test("Should throw if a invalid person type is provided", () => {
    const data = makeAValidCustomer();
    expect(
      () =>
        new Customer({
          ...data,
          personType: 14 as PersonType,
        })
    ).toThrow(new InvalidEntityException(messages.invalidCustomerType));
  });

  test("Should disable a customer", () => {
    const data = makeAValidCustomer();
    const customer = new Customer(data).disable().getCustomer;
    expect(customer.active).toBe(false);
  });

  test("Should return a new customer and use the provided id", () => {
    const data = makeAValidCustomer();
    const customer = new Customer(data).getCustomer;
    expect(customer).toEqual(data);
    expect(customer.id).toBe(data.id);
  });
});
