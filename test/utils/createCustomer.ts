import { randomUUID } from "node:crypto";
import { ICreateCustomerData } from "../../src/@types/customer.type";
import { PersonType } from "../../src/domain/enums/personType.enum";

export function makeAValidCustomer(): ICreateCustomerData {
  return {
    id: randomUUID(),
    name: "name",
    active: true,
    address: {
      cep: "18079105",
      city: "Sorocaba/SP",
      number: "10000",
      province: "JA",
      state: "SP",
      street: "aaaaaa"
    },
    cpfCnpj: "1111111111111",
    dateOfBirth: "20/12/2002",
    personType: PersonType.LEGAL,
    createdAt: new Date(),
  };
}
