import { randomUUID } from "node:crypto";
import { ICustomer } from "../../src/@types/customer.type";
import { PersonType } from "../../src/domain/enums/personType.enum";

export function makeAValidCustomer(): ICustomer {
  return {
    id: randomUUID(),
    name: "name",
    active: true,
    address: "any_address",
    cpfCnpj: "1111111111111",
    dateOfBirth: new Date(),
    personType: PersonType.LEGAL,
    createdAt: new Date(),
  };
}
