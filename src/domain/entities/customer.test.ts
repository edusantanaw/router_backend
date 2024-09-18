import { makeAValidCustomer } from "@/test/utils/createCustomer";
import { Customer } from "./customer";
import { PersonType } from "../enums/personType.enum";

describe("Customer", () => {
  test("Should generate a random uuid if id is not provided", () => {
    const data = makeAValidCustomer();
    delete data.id;
    const customer = new Customer({
      name: "name",
      active: true,
      address: "any_address",
      cpfCnpj: "1111111111111",
      dateOfBirth: new Date(),
      personType: PersonType.LEGAL,
    }).getCustomer;
    expect(customer.id).not.toBe(undefined);
  });

  test("Should disable a customer", () => {
    const data = makeAValidCustomer();
    const customer = new Customer(data).disable().getCustomer;
    expect(customer.active).toBe(false);
  });

  test("Should return a new customer", () => {
    const data = makeAValidCustomer();
    const customer = new Customer(data).getCustomer;
    expect(customer).toEqual(data);
  });
});
