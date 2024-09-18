import { ICreateCustomerData } from "@/@types/customer.type";
import { PersonType } from "@/domain/enums/personType.enum";
import { randomUUID } from "node:crypto";

export function makeAValidCustomer(): ICreateCustomerData {
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
